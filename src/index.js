import _ from 'lodash';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import parser from './parse.js';
import formatter from './formatters/index.js';
import comparisonDifferences from './comparisonDifferences.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathTofile = (name) => path.resolve(__dirname, '..', name);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

const gendiff = (path1, path2, format) => {
  const pathFile1 = getPathTofile(path1);
  const pathFile2 = getPathTofile(path2);
  const file1 = readFile(pathFile1);
  const file2 = readFile(pathFile2);
  const typeFile1 = pathFile1.substring(_.lastIndexOf(pathFile1, '.') + 1);
  const typeFile2 = pathFile2.substring(_.lastIndexOf(pathFile2, '.') + 1);
  const parseFile1 = parser(typeFile1, file1);
  const parseFile2 = parser(typeFile2, file2);
  const union = comparisonDifferences(parseFile1, parseFile2);
  const res = formatter(union, format);
  return res;
};

export default gendiff;
