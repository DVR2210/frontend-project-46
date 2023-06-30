import makeStylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatter = (tree, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return json(tree);
    default:
      throw new Error(`Error: ${format} - this format is not supported. Available formats: stylish, plain, json`);
  }
};

export default formatter;
