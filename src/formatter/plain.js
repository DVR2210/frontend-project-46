import _ from 'lodash';

const getName = (item) => item.name;
const getChildren = (item) => item.children;
const isValue = (value) => (_.isObject(value) ? '[complex value]' : value);
const isString = (item) => (_.isString(item) && item !== '[complex value]' ? `'${item}'` : item);

const plain = (tree) => {
  const iter = (node, name = '') => {
    const result = node.flatMap((item) => {
      switch (item.status) {
        case 'added':
          return `Property '${name + getName(item)}' was added with value: ${isString(isValue(item.value))}`;
        case 'deleted':
          return `Property '${name + getName(item)}' was removed`;
        case 'unchanged':
          return [];
        case 'changed':
          return `Property '${name + getName(item)}' was updated. From ${isString(isValue(item.value1))} to ${isString(isValue(item.value2))}`;
        case 'nested':
          return iter(getChildren(item), `${name + getName(item)}.`);
        default:
          throw new Error('Invalid format');
      }
    });
    return result.join('\n');
  };
  return iter(tree);
};
export default plain;
