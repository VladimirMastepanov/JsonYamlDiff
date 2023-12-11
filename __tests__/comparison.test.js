import { test, expect } from '@jest/globals';
// import fs from 'fs';
// import path, { dirname } from 'path';
// import { fileURLToPath } from 'url';
import stylish from '../src/formatters/stylish.js';
import objForTest1 from '../__fixtures__/fileExempl1.js';
import objForTest2 from '../__fixtures__/fileExempl2.js';
// import { parserJson, parserYaml } from '../src/parsers.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const getPathTofile = (name) => path.resolve(__dirname, '..', '__fixtures__', name);
// const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf8' });

// const file1J = 'file1.json';
// const file2J = 'file2.json';
// const file2Y = 'file1.yml';
// const file2Y = 'file2.yml';

// const strRes = `{
//   common: {
//     + follow: false
//       setting1: Value 1
//     - setting2: 200
//     - setting3: true
//     + setting3: null
//     + setting4: blah blah
//     + setting5: {
//           key5: value5
//       }
//       setting6: {
//           doge: {
//             - wow:
//             + wow: so much
//           }
//           key: value
//         + ops: vops
//       }
//   }
//   group1: {
//     - baz: bas
//     + baz: bars
//       foo: bar
//     - nest: {
//           key: value
//       }
//     + nest: str
//   }
// - group2: {
//       abc: 12345
//       deep: {
//           id: 45
//       }
//   }
// + group3: {
//       deep: {
//           id: {
//               number: 45
//           }
//       }
//       fee: 100500
//   }
// }`;

// const pathFirestFile = getPathTofile(file1J);
// const pathSecondFile = getPathTofile(file2J);
// const readFirstFile = readFile(pathFirestFile);
// const readSecondFile = readFile(pathSecondFile);
// const readFileJson1 = parserJson(readFirstFile);
// const readFileJson2 = parserJson(readSecondFile);

// test('recursive comparison two objects', () => {
//   expect(comparison(readFileJson1, readFileJson2)).toEqual(strRes);
// });

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
  expect(stylish(data1, data2)).toEqual(str1);
});

test('comparison with empty', () => {
  expect(stylish(data1, data3)).toEqual(str2);
});

test('comparison empty with obj', () => {
  expect(stylish(data3, data2)).toEqual(str3);
});
