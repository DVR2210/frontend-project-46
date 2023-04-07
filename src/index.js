
import readFileSync from 'fs';
import _ from 'lodash';

const gendiff = (obj1, obj2) => {
    const result = {};
    const keys1 = _.keys(obj1);
    const keys2 = _.keys(obj2);
    const keys = _.union(keys1, keys2);
    
    for (let key of keys) {
      if (!_.has(obj1, key)) {
      result[key] = 'added';
      
    } else if (!_.has(obj2, key)) {
      result[key] = 'deleted';
      
    } else if (obj1[key] !== obj2[key]) {
      result[key] = 'changed';
      
    } else {
      result[key] = 'unchanged';
    }
  }
    return result;
    
  };


export default gendiff;

// const data1 = fs.readFileSync(path, 'utf-8'); // функция получает путь к фалам 

// const dataPars = JSON.parse(data); // тут получаем объект 
