#!/usr/bin/env node
import { program } from "commander";
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import parser from "./tools/parser.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setPathTofile = (name) => path.resolve(process.cwd(), name);

const gendiff = (path1, path2) => {
  const pathToFile1 = setPathTofile(path1);
  const pathToFile2 = setPathTofile(path2);
  const firstFile = fs.readFileSync(pathToFile1, { encoding: 'utf8' });
  const secondFile = fs.readFileSync(pathToFile2, { encoding: 'utf8' });
  const parsedFile1 = parser(firstFile);
  const parsedFile2 = parser(secondFile)
  console.log(parsedFile1, parsedFile2);
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



