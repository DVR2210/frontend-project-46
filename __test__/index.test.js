import { test, expect } from '@jest/globals'; 
import { readFileSync } from 'fs'; 
import path from 'path'; 
import { fileURLToPath } from 'url'; 
import genDiff from '../src/index.js'; 

const getFixturePath = (file) => {
    const __filename = fileURLToPath(import.meta.url); 
    const __dirname = path.dirname(__filename); 
    return path.join(__dirname, '..', '__fixtures__', file); 
};

test('file json', () => {
   const filename1 = getFixturePath('file1.json');
   const filename2 = getFixturePath('file2.json');
    const resultName = getFixturePath('file_result.txt');
    const result = readFileSync(resultName, 'utf8');
    expect(genDiff(filename1, filename2)).toEqual(result);
});

test('file yaml', () => {
    const filename1 = getFixturePath('file1.yaml');
    const filename2 = getFixturePath('file2.yaml');
    const resultName = getFixturePath('file_result.txt');
    const result = readFileSync(resultName, 'utf8');
    expect(genDiff(filename1, filename2)).toEqual(result);
});

test('file yml', () => {
    const filename1 = getFixturePath('file1.yml');
    const filename2 = getFixturePath('file2.yml');
    const resultName = getFixturePath('file_result.txt');
    const result = readFileSync(resultName, 'utf8');
    expect(genDiff(filename1, filename2)).toEqual(result);
});

test('plain', () => {
    const filename1 = getFixturePath('file1.yml');
    const filename2 = getFixturePath('file2.yml');
    const resultName = getFixturePath('file_result_plain.txt');
    const result = readFileSync(resultName, 'utf8');
    expect(genDiff(filename1, filename2, 'plain')).toEqual(result);
  });