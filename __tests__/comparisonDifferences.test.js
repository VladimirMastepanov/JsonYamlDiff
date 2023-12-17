import { test, expect } from '@jest/globals';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import parserJson from '../src/parsers/parcerJson.js';
import comparisonDifferences from '../src/comparisonDifferences.js';
import arrayForTest from '../__fixtures__/arrayForTest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathTofile = (name) => path.resolve(__dirname, '..', '__fixtures__', name);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

const file1J = 'file1.json';
const file2J = 'file2.json';

const pathFirestFileJ = getPathTofile(file1J);
const pathSecondFileJ = getPathTofile(file2J);
const readFirstFileJ = readFile(pathFirestFileJ);
const readSecondFileJ = readFile(pathSecondFileJ);
const readFileJson1 = parserJson(readFirstFileJ);
const readFileJson2 = parserJson(readSecondFileJ);

test('comparison two objects json', () => {
  expect(comparisonDifferences(readFileJson1, readFileJson2)).toEqual(arrayForTest);
});
