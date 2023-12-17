import { test, expect } from '@jest/globals';
import arrayForTest from '../__fixtures__/arrayForTest.js';
import plainStringForTest from '../__fixtures__/plainStringForTest.js';
import plain from '../src/formatters/plain.js';

test('plain formatter', () => {
  expect(plain(arrayForTest)).toEqual(plainStringForTest);
});
