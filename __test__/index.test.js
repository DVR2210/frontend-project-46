import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const jsonFileName1 = getFixturePath('file1.json');
const jsonFileName2 = getFixturePath('file2.json');
const ymlFileName1 = getFixturePath('file1.yml');
const ymlFileName2 = getFixturePath('file2.yml');
const yamlFileName1 = getFixturePath('file1.yaml');
const yamlFileName2 = getFixturePath('file2.yaml');

const getExpectedResult = (fileName) => readFileSync(getFixturePath(fileName), 'utf8');

const expectedJson = getExpectedResult('expectedJSON.txt');
const expectedPlain = getExpectedResult('expectedPlain.txt');
const expectedStylish = getExpectedResult('expectedStylish.txt');

test.each([
  {
    a: jsonFileName1, b: jsonFileName2, format: 'json', expected: expectedJson,
  },
  {
    a: jsonFileName1, b: jsonFileName2, format: 'stylish', expected: expectedStylish,
  },
  {
    a: jsonFileName1, b: jsonFileName2, format: 'plain', expected: expectedPlain,
  },
  {
    a: jsonFileName1, b: jsonFileName2, format: undefined, expected: expectedStylish,
  },
  {
    a: ymlFileName1, b: ymlFileName2, format: 'json', expected: expectedJson,
  },
  {
    a: ymlFileName1, b: ymlFileName2, format: 'stylish', expected: expectedStylish,
  },
  {
    a: ymlFileName1, b: ymlFileName2, format: 'plain', expected: expectedPlain,
  },
  {
    a: ymlFileName1, b: ymlFileName2, format: undefined, expected: expectedStylish,
  },
  {
    a: yamlFileName1, b: yamlFileName2, format: 'json', expected: expectedJson,
  },
  {
    a: yamlFileName1, b: yamlFileName2, format: 'stylish', expected: expectedStylish,
  },
  {
    a: yamlFileName1, b: yamlFileName2, format: 'plain', expected: expectedPlain,
  },
  {
    a: yamlFileName1, b: yamlFileName2, format: undefined, expected: expectedStylish,
  },
])('gendiff tests', ({
  a, b, format, expected,
}) => {
  expect(genDiff(a, b, format)).toBe(expected);
});
