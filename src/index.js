#!/usr/bin/env node

import { readFileSync } from 'fs';
import path from 'path';
import { cwd } from 'process';
import parser from './parsers.js';
import getDifferenceTree from './buildAST.js';
import formatter from './formatter/index.js';

const getPath = (filepath) => path.resolve(cwd(), filepath);
const getFileFormat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);

  const obj1 = readFileSync(filepath1, 'utf-8');
  const obj2 = readFileSync(filepath2, 'utf-8');

  const parseObj1 = parser(obj1, getFileFormat(path1));
  const parseObj2 = parser(obj2, getFileFormat(path2));

  const result = getDifferenceTree(parseObj1, parseObj2);
  return formatter(result, format);
};

export default genDiff;
