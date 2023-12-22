import { test, expect } from '@jest/globals';
import comparisonDifferences from '../src/comparisonDifferences.js';
import { fileFoComparison1, fileFoComparison2 } from '../__fixtures__/filsForTests.js';
import arrayForTest from '../__fixtures__/arrayForTest.js';

test('comparison two objects json', () => {
  expect(comparisonDifferences(fileFoComparison1, fileFoComparison2)).toEqual(arrayForTest);
});
