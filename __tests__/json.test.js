import { test, expect } from '@jest/globals';
import arrayForTest from '../__fixtures__/arrayForTest.js';
import jsonStringForTest from '../__fixtures__/jsonStringForTest.js';
import json from '../src/formatters/json.js';

test('json formatter', () => {
  expect(json(arrayForTest)).toEqual(jsonStringForTest);
});
