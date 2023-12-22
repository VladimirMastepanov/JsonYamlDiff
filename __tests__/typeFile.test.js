import { test, expect } from '@jest/globals';
import typeFile from '../src/typeFile.js';

const str1 = '/Users/vladimirmastepanov/frontend-project-46/__fixtures__/file1.json';

const str2 = '/Users/vladimirmastepanov/frontend-project-46/__fixtures__/file1.yaml';

const str3 = '/Users/vladimirmastepanov/frontend-project-46/__fixtures__/file1.ml';

test('json type', () => {
  expect(typeFile(str1)).toBe('json');
});
test('yaml type', () => {
  expect(typeFile(str2)).toBe('yaml');
});
test('unknown type', () => {
  expect(typeFile(str3)).toBe('Unknown file format');
});
