import { test, expect } from '@jest/globals'; // импорт джеста 
import { readFileSync } from 'fs'; // чтение файла 
import path from 'path'; // модуль чтения путей 
import { fileURLToPath } from 'url'; // функция декодирования элемнетов 
import genDiff from '../src/index.js'; // функция итогавая сборка


const __filename = fileURLToPath(import.meta.url); // поулчаем путь до файла - абсолютный путь? 
const __dirname = path.dirname(__filename); // получаем название папки в которйо находимся 

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename); // метод джоин генирирует путь 


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
