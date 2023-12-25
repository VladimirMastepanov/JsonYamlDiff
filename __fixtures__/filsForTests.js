import _ from 'lodash';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import parse from '../src/parse.js';

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
const typeFile1 = pathFile1.substring(_.lastIndexOf(pathFile1, '.') + 1);
const typeFile2 = pathFile2.substring(_.lastIndexOf(pathFile2, '.') + 1);
const fileFoComparison1 = parse(typeFile1, file1);
const fileFoComparison2 = parse(typeFile2, file2);

export {
  file1,
  file2,
  typeFile1,
  typeFile2,
  fileFoComparison1,
  fileFoComparison2,
};
