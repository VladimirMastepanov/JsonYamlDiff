import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import typeFile from '../src/typeFile.js';
import parser from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathTofile = (name) => path.resolve(__dirname, '..', '__fixtures__', name);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

const file1J = 'file1.json';
const file2J = 'file2.json';

const pathFile1 = getPathTofile(file1J);
const pathFile2 = getPathTofile(file2J);
const file1 = readFile(pathFile1);
const file2 = readFile(pathFile2);
const typeFile1 = typeFile(pathFile1);
const typeFile2 = typeFile(pathFile2);
const fileFoComparison1 = parser(typeFile1, file1);
const fileFoComparison2 = parser(typeFile2, file2);

export {
  file1,
  file2,
  typeFile1,
  typeFile2,
  fileFoComparison1,
  fileFoComparison2,
};
