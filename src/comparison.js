import _ from 'lodash';

const comparison = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2).sort();

  let res = '';
  for (const key of keys) {
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        res += `    ${key}: ${obj1[key]}\n`;
      } else {
        res += `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}\n`;
      }
    }
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      res += `  - ${key}: ${obj1[key]}\n`;
    }
    if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      res += `  + ${key}: ${obj2[key]}\n`;
    }
  }
  return res = `{\n${res}}`;
};

export default comparison;
