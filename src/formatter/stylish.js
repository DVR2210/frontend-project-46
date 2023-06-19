import _ from 'lodash';

const space = ' ';
const spaceCount = 4;

const genIndent = (depth) => space.repeat(depth * spaceCount).slice(0, -2);


const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return String(value);
  }
  const lines = Object
    .entries(value)
    .map(([key, val]) => `${genIndent(depth + 1)}  ${key}: ${stringify(val, (depth + 1))}`);
  return `{\n${lines.join('\n')}\n${genIndent(depth)}  }`;
};


const stylish = (tree) => {
  const iter = (node, depth = 1) => {
    const result = node.map((item) => {
      switch (item.status) {
        case 'nested':
          return `${genIndent(depth)}  ${item.name}: {\n${iter(item.children, depth + 1)}\n${genIndent(depth)}  }`;
        case 'added':
          return `${genIndent(depth)}+ ${item.name}: ${stringify(item.value, depth)}`;
        case 'deleted':
          return `${genIndent(depth)}- ${item.name}: ${stringify(item.value, depth)}`;
        case 'unchanged':
          return `${genIndent(depth)} ${item.name}: ${stringify(item.value, depth)}`;
        case 'changed':
          return `${genIndent(depth)}- ${item.name}: ${stringify(item.value1, depth)}\n${genIndent(depth)}+ ${item.name}: ${stringify(item.value2, depth)}`;
        default:
          throw new Error('Invalid format');
      }
    });
    return result.join('\n');
  };
  return `{\n${iter(tree)}\n}`;
};
export default stylish;