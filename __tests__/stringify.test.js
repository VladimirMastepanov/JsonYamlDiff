import { test, expect } from '@jest/globals';
import stringify from '../src/tools/stringify.js';
import objectForTests3 from '../__fixtures__/objectForTests3.js';

// const res = `{
//   common: {
//   setting1: Value 1
//   setting2: 200
//   setting3: true
//   setting6: {
//   key: value
//   doge: {
//   wow:
// }
// }
// }
// }`;

test('stringify object shuld be str', () => {
  expect(typeof stringify(objectForTests3)).toBe('string');
});
