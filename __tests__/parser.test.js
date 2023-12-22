import { test, expect } from '@jest/globals';
import { parse } from 'yaml';
import parser from '../src/parser.js';
import {
  file1,
} from '../__fixtures__/filsForTests.js';

const typeJson = 'json';
const typeYaml = 'yaml';
const typeUnknown = 'txt';

test('parse to json', () => {
  expect(parser(typeJson, file1)).toEqual(JSON.parse(file1));
});

test('parse to yaml', () => {
  expect(parser(typeYaml, file1)).toEqual(parse(file1));
});

test('unknown type', () => {
  expect(parser(typeUnknown, file1)).toBe('Unknown type file');
});
