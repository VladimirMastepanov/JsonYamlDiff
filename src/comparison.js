import _ from 'lodash';

const comparison = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2).sort();
  const firstKey = '  - ';
  const secondKey = '  + ';

  const lines = keys.reduce(((acc, key) => {
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        acc.push(`    ${key}: ${obj1[key]}`);
      } else {
        acc.push(`${firstKey}${key}: ${obj1[key]}`);
        acc.push(`${secondKey}${key}: ${obj2[key]}`);
      }
    }
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      acc.push(`${firstKey}${key}: ${obj1[key]}`);
    }
    if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      acc.push(`${secondKey}${key}: ${obj2[key]}`);
    }
    return acc;
  }), []);
  return [
    '{',
    ...lines,
    '}',
  ].join('\n');
};

// let res = '';
// for (const key of keys) {
//   if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
//     if (obj1[key] === obj2[key]) {
//       res += `    ${key}: ${obj1[key]}\n`;
//     } else {
//       res += `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}\n`;
//     }
//   }
//   if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
//     res += `  - ${key}: ${obj1[key]}\n`;
//   }
//   if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
//     res += `  + ${key}: ${obj2[key]}\n`;
//   }
// }

// let str = keys.reduce(((acc, key) => {
//   if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
//     if (obj1[key] === obj2[key]) {
//       acc += `    ${key}: ${obj1[key]}\n`;
//     } else {
//       acc += `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}\n`;
//     }
//   }
//   if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
//     acc += `  - ${key}: ${obj1[key]}\n`;
//   }
//   if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
//     acc += `  + ${key}: ${obj2[key]}\n`;
//   }
//   return acc;
// }), '');

// res = `{\n${res}}`;
// return res;
// };

export default comparison;
