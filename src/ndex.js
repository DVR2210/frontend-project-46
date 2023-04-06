import { readFileSync } from 'fs';

const data = fs.readFileSync(path, 'utf-8'); // функция получает путь к фалам 

const dataPars = JSON.parse(data); // тут получаем объект 
