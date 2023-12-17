#!/usr/bin/env node
import { program } from 'commander';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import parser from './src/parsers/index.js';
import formatter from './src/formatters/index.js';
import comparisonDifferences from './src/comparisonDifferences.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathTofile = (name) => path.resolve(__dirname, name);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

const gendiff = (path1, path2, format) => {
  const pathFirsFile = getPathTofile(path1);
  const pathSecondFile = getPathTofile(path2);
  const firstFile = readFile(pathFirsFile);
  const secondFile = readFile(pathSecondFile);
  const parseFirstFile = parser(pathFirsFile, firstFile);
  const parseSecondFile = parser(pathSecondFile, secondFile);
  const union = comparisonDifferences(parseFirstFile, parseSecondFile);
  const res = formatter(union, format);
  return res;
};

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1>, <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2, program.opts().format));
  });

program.parse();
