import path from 'path';
import fs from 'fs';

const getAbsoluteFilePath = (filepath) => path.resolve(process.cwd(), filepath);
export const getFormat = (filepath) => path.extname(filepath).substring(1);
export const readFile = (filepath) => fs.readFileSync(getAbsoluteFilePath(filepath), 'utf-8');
