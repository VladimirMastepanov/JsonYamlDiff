import { test, expect } from 'jest';
import comparison from '../src/comparison.js';
import objForTest1 from '../__fixtures__/fileExempl1.js';
import objForTest2 from '../__fixtures__/fileExempl2.js';

const data1 = objForTest1;
const data2 = objForTest2;
const data3 = {};

const str1 = `{
  - age: 50
  + age: 20
  - human: false
  + human: true
  - mail: fff@yahoo
  + mail: xxx@gmail
  - name: Mike
  + name: Joe
  - phone: 123-234-53
  - surname: Cho
}`;
const str2 = `{
  - age: 50
  - human: false
  - mail: fff@yahoo
  - name: Mike
  - phone: 123-234-53
  - surname: Cho
}`;
const str3 = `{
  + age: 20
  + human: true
  + mail: xxx@gmail
  + name: Joe
}`;

test('comparison two objects', () => {
  expect(comparison(data1, data2)).toEqual(str1);
});

test('comparison with empty', () => {
  expect(comparison(data1, data3)).toEqual(str2);
});

test('comparison empty with obj', () => {
  expect(comparison(data3, data2)).toEqual(str3);
});
