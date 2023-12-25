import { test, expect } from '@jest/globals';
import { parse as yamlParse } from 'yaml';
import parse from '../src/parse.js';
import {
  file1,
} from '../__fixtures__/filsForTests.js';

const typeJson = 'json';
const typeYaml = 'yaml';
const typeUnknown = 'txt';

test('parse to json', () => {
  expect(parse(typeJson, file1)).toEqual(JSON.parse(file1));
});

test('parse to yaml', () => {
  expect(parse(typeYaml, file1)).toEqual(yamlParse(file1));
});

test('unknown type', () => {
  expect(parse(typeUnknown, file1)).toBe(`Unknown type file: ${typeUnknown}`);
});
