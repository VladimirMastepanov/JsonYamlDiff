#!/usr/bin/env node
import { program } from 'commander';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { parserJson, parserYaml } from './src/parsers.js';
import comparison from './src/comparison.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathTofile = (name) => path.resolve(__dirname, name);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

const gendiff = (path1, path2) => {
  const pathFirsFile = getPathTofile(path1);
  const pathSecondFile = getPathTofile(path2);
  const firstFile = readFile(pathFirsFile);
  const secondFile = readFile(pathSecondFile);
  const parseFirstFile = pathFirsFile.endsWith('json') ? parserJson(firstFile) : parserYaml(firstFile);
  const parseSecondFile = pathSecondFile.endsWith('json') ? parserJson(secondFile) : parserYaml(secondFile);
  const res = comparison(parseFirstFile, parseSecondFile);
  return res;
};

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1>, <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2));
  })
  .parse();
