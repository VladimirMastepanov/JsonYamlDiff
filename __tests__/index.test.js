import { test, expect } from '@jest/globals';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathTofile = (name) => path.resolve(__dirname, '..', '__fixtures__', name);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

const jsonPath1 = '__fixtures__/file1.json';
const jsonPath2 = '__fixtures__/file2.json';
const yamlPath1 = '__fixtures__/file1.yml';
const ymlPath2 = '__fixtures__/file2.yml';

const plainStringForTest = 'result_plain.txt';
const stylishStringForTest = 'result_stylish.txt';

const pathPlainResult = getPathTofile(plainStringForTest);
const plainResult = readFile(pathPlainResult);

const pathStylishResult = getPathTofile(stylishStringForTest);
const stylishResult = readFile(pathStylishResult);

test('two json files, plain formatter', () => {
  expect(gendiff(jsonPath1, jsonPath2, 'plain')).toEqual(plainResult);
});

test('two yaml files, plain formatter', () => {
  expect(gendiff(yamlPath1, ymlPath2, 'plain')).toEqual(plainResult);
});

test('two json files, stylish formatter', () => {
  expect(gendiff(jsonPath1, jsonPath2)).toEqual(stylishResult);
});

test('two yaml files, stylish formatter', () => {
  expect(gendiff(yamlPath1, ymlPath2)).toEqual(stylishResult);
});
