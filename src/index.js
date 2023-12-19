import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import parser from './parsers/index.js';
import formatter from './formatters/index.js';
import comparisonDifferences from './comparisonDifferences.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathTofile = (name) => path.resolve(__dirname, name);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

const gendiff = (path1, path2, format) => {
  const pathFile1 = getPathTofile(path1);
  const pathFile2 = getPathTofile(path2);
  const file1 = readFile(pathFile1);
  const file2 = readFile(pathFile2);
  const parseFile1 = parser(pathFile1, file1);
  const parseFile2 = parser(pathFile2, file2);
  const union = comparisonDifferences(parseFile1, parseFile2);
  const res = formatter(union, format);
  return res;
};

export default gendiff;
