import { readFileSync } from 'fs';
import yaml from 'js-yaml';

const fileContent = (file) => readFileSync(file, 'utf-8');

//const fileContenPars = (dataPars) => JSON.parse(dataPars);
const fileContenPars = (dataPars) => yaml.load(dataPars);

const functionGenDiff = (obj1, obj2) => {
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)].sort());
  const diff = Array.from(keys).map((key) => {

    if (!obj1.hasOwnProperty(key)) {
      return `  + ${key}: ${obj2[key]}`;
    }

    if (!obj2.hasOwnProperty(key)) {
      return `  - ${key}: ${obj1[key]}`;
    }

    if (obj1[key] === obj2[key]) {
      return `    ${key}: ${obj1[key]}`;
    }

    if (obj1 !== obj2[key]) {
      return [`  - ${key}: ${obj1[key]}`,
      `  + ${key}: ${obj2[key]}`];

    }

  });
  return `${"{"}\n${diff.flat().join('\n')}\n${"}"}`;
};

const gendiff = (arg1, arg2) => {
  const newRedfile1 = fileContent(arg1);
  const newRedfile2 = fileContent(arg2);
  const data1 = fileContenPars(newRedfile1);
  const data2 = fileContenPars(newRedfile2);
  const result = functionGenDiff(data1, data2)
  return result;
};

export default gendiff;