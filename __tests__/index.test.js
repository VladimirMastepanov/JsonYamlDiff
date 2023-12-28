import { test, expect, describe } from '@jest/globals';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathToFile = (name) => path.resolve(__dirname, '..', '__fixtures__', name);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

const jsonPath1 = getPathToFile('file1.json');
const jsonPath2 = getPathToFile('file2.json');
const yamlPath1 = getPathToFile('file1.yml');
const ymlPath2 = getPathToFile('file2.yml');

const plainStringForTest = 'result_plain.txt';
const stylishStringForTest = 'result_stylish.txt';

const pathPlainResult = getPathToFile(plainStringForTest);
const plainResult = readFile(pathPlainResult);

const pathStylishResult = getPathToFile(stylishStringForTest);
const stylishResult = readFile(pathStylishResult);

describe('comparison two files', () => {
  test.each([
    [jsonPath1, jsonPath2, 'plain', plainResult],
    [yamlPath1, ymlPath2, 'plain', plainResult],
    [jsonPath1, jsonPath2, 'stylish', stylishResult],
    [yamlPath1, ymlPath2, 'stylish', stylishResult],
  ])('two files, depending on the specified format, must be formatted as a result.', (path1, path2, format, expected) => {
    expect(gendiff(path1, path2, format)).toEqual(expected);
  });
});
