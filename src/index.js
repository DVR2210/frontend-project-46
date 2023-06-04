import parse from './parsers.js';
import { getFormat, readFile } from './utils.js';
import buildTree from './buildTree.js';
import formatter from './formatter/index.js';


const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const file1 = readFile(filePath1);
  const file2 = readFile(filePath2);

  const obj1 = parse(file1, getFormat(filePath1));
  const obj2 = parse(file2, getFormat(filePath2));

  const tree = buildTree(obj1, obj2);
  return formatter(tree, format);
};
export default genDiff;