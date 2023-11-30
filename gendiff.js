#!/usr/bin/env node
import { program } from "commander";
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import { parse, stringify } from "yaml";
import comparison from "./src/comparison.js";
import _ from "lodash";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parserJson = (str) => JSON.parse(str);
const setPathTofile = (name) => path.resolve(process.cwd(), name);
const readFile = (path) => fs.readFileSync(path, { encoding: 'utf8' })

const gendiff = (path1, path2) => {
  const pathToFile1 = setPathTofile(path1);
  const pathToFile2 = setPathTofile(path2);
  const firstFile = readFile(pathToFile1);
  const secondFile = readFile(pathToFile2);
  const parsedFile1 = pathToFile1.endsWith('json') ? parserJson(firstFile) : parse(firstFile);
  const parsedFile2 = pathToFile2.endsWith('json') ? parserJson(secondFile) : parse(secondFile);
  const comp = comparison(parsedFile1, parsedFile2);
  const toStr = JSON.stringify(comp)
  return toStr;
}

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1>, <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2))
  })
  .parse()



