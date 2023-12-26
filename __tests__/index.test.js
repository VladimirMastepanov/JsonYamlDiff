import { test, expect } from '@jest/globals';
import gendiff from '../src/gendiff.js';
import jsonStringForTest from '../__fixtures__/jsonStringForTest.js';
import plainStringForTest from '../__fixtures__/plainStringForTest.js';

const jsonPath1 = '__fixtures__/file1.json';
const jsonPath2 = '__fixtures__/file2.json';
const yamlPath1 = '__fixtures__/file1.yaml';
const ymlPath2 = '__fixtures__/file2.yml';

test('two json files, plain formatter', () => {
  expect(gendiff(jsonPath1, jsonPath2, 'plain')).toEqual(plainStringForTest);
});

// test('two yaml and yml files, json formatter', () => {
//   expect(gendiff(yamlPath1, ymlPath2, 'json')).toBe(jsonStringForTest);
// });
