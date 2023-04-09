
import { readFileSync } from 'fs';
import _ from 'lodash';

const data1 = readFileSync(file1.json, 'utf-8');
const data2 = readFileSync(file2.json, 'utf-8');

const obj1 = JSON.parse(data1);
const obj2 = JSON.parse(data2);




// const obj1 = {
//   "host": "hexlet.io",
//   "timeout": 50,
//   "proxy": "123.234.53.22",
//   "follow": false
// };

// const obj2 = {
//   "timeout": 20,
//   "verbose": true,
//   "host": "hexlet.io"
// };

const gendiff = (obj1, obj2) => {
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)].sort());
  const diff = Array.from(keys).map((key) => {

    if (!obj1.hasOwnProperty(key)) {    
      return `+ ${key}: ${obj2[key]}`;
    }

    if (!obj2.hasOwnProperty(key)) {
      return `- ${key}: ${obj1[key]}`;
    }

    if (obj1[key] === obj2[key]) {
      return ` ${key}:${obj1[key]}`;
    }

    if (obj1 !== obj2[key]) { 
      return [`- ${key}: ${obj1[key]}`,
             `+ ${key}: ${obj2[key]}`];
            
    }

  });
  return diff.flat().join('\n');
};

console.log(gendiff(obj1, obj2));

export default gendiff;