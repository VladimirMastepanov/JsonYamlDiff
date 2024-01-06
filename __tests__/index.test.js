import { test, expect, describe } from '@jest/globals';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathToFile = (name) => path.resolve(__dirname, '..', '__fixtures__', name);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

describe('comparison two files', () => {
  test.each([
    ['file1.json', 'file2.json', 'plain', 'result_plain.txt'],
    ['file1.yml', 'file2.yml', 'plain', 'result_plain.txt'],
    ['file1.json', 'file2.json', 'stylish', 'result_stylish.txt'],
    ['file1.yml', 'file2.yml', 'stylish', 'result_stylish.txt'],
    ['file1.json', 'file2.json', 'json', 'result_json.txt'],
  ])('two files, depending on the specified format, must be formatted as a result.', (path1, path2, format, expected) => {
    expect(gendiff(
      getPathToFile(path1),
      getPathToFile(path2),
      format,
    )).toEqual(readFile(getPathToFile(expected)));
  });
});
