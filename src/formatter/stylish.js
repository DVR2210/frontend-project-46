import _ from 'lodash';

const indent = ' ';
const indentSize = 4;
const currentIndent = (depth) => indent.repeat(indentSize * depth - 2);
const braceIndent = (depth) => indent.repeat(indentSize * depth - indentSize);

const joinString = (lines, depth) => [
  '{',
  ...lines,
  `${braceIndent(depth)}}`,
].join('\n');

const stringify = (data, depth) => {
  if (!_.isPlainObject(data)) {
    return String(data);
  }
  const keys = _.keys(data);
  const lines = keys.map((key) => `${currentIndent(depth)}  ${key}: ${stringify(data[key], depth + 1)}`);
  return joinString(lines, depth);
};

const makeStylishDiff = (tree) => {
  const iter = (node, depth) => {
    switch (node.type) {
      case 'root': {
        const result = node.children.flatMap((child) => iter(child, depth));
        return joinString(result, depth);
      }
      case 'nested': {
        const childrenToString = node.children.flatMap((child) => iter(child, depth + 1));
        return `${currentIndent(depth)}  ${node.key}: ${joinString(childrenToString, depth + 1)}`;
      }
      case 'added': {
        return `${currentIndent(depth)}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
      }
      case 'removed': {
        return `${currentIndent(depth)}- ${node.key}: ${stringify(node.value, depth + 1)}`;
      }
      case 'changed': {
        return [`${currentIndent(depth)}- ${node.key}: ${stringify(node.value, depth + 1)}`,
          `${currentIndent(depth)}+ ${node.key}: ${stringify(node.value2, depth + 1)}`];
      }
      case 'unchanged': {
        return `${currentIndent(depth)}  ${node.key}: ${stringify(node.value, depth + 1)}`;
      }
      default: {
        throw new Error(`"${node.type}" type is not supported by the formatter`);
      }
    }
  };
  return iter(tree, 1);
};

export default makeStylishDiff;
