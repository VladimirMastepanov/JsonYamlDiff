import _ from 'lodash';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import parser from './parse.js';
import formatter from './formatters/index.js';
import comparisonDifferences from './comparisonDifferences.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathToFile = (name) => path.resolve(__dirname, '..', name);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

const getConnect = (pathFile) => {
  const data = readFile(pathFile);
  const type = pathFile.substring(_.lastIndexOf(pathFile, '.') + 1);
  return parser(data, type);
};

const gendiff = (path1, path2, format = 'stylish') => {
  const pathFile1 = getPathToFile(path1);
  const pathFile2 = getPathToFile(path2);
  const data1 = getConnect(pathFile1);
  const data2 = getConnect(pathFile2);
  const union = comparisonDifferences(data1, data2);
  if (format === 'plain' || format === 'json' || format === 'stylish') {
    return formatter(union, format);
  }
  return 'Unknown formatting style';
};

export default gendiff;
