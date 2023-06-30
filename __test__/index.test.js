#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import url from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const fileJSON1 = getFixturePath('file1.json');
const fileJSON2 = getFixturePath('file2.json');

const fileYAML1 = getFixturePath('file1.yaml');
const fileYAML2 = getFixturePath('file2.yaml');

const fileYML1 = getFixturePath('file1.yml');
const fileYML2 = getFixturePath('file2.yml');

const result = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const resultStylish = result('expected-stylish.txt');
const resultPlain = result('expected-plain.txt');
const resultJson = result('expected-json.txt');

test.each([
  {
    file1: fileJSON1, file2: fileJSON2, formatName: 'stylish', expected: resultStylish,
  },
  {
    file1: fileYAML1, file2: fileYAML2, formatName: 'stylish', expected: resultStylish,
  },
  {
    file1: fileYML1, file2: fileYML2, formatName: 'stylish', expected: resultStylish,
  },
  {
    file1: fileJSON1, file2: fileJSON2, formatName: 'plain', expected: resultPlain,
  },
  {
    file1: fileYAML1, file2: fileYAML2, formatName: 'plain', expected: resultPlain,
  },
  {
    file1: fileYML1, file2: fileYML2, formatName: 'plain', expected: resultPlain,
  },
  {
    file1: fileYML1, file2: fileYML2, formatName: 'json', expected: resultJson,
  },
])('diff tests', ({
  file1, file2, formatName, expected,
}) => {
  expect(genDiff(file1, file2, formatName)).toBe(expected);
});
