import _ from 'lodash';
import stringify from './stringify.js';

const comparison = (obj1, obj2) => {
  const propFirst = '- ';
  const propSecond = '+ ';
  const propGeneral = '  ';
  const bracket = ' ';
  const bracketQuantity = 4;

  const iter = (data1 = {}, data2 = {}, spaseCount = 1) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2).sort();
    const spase = bracket.repeat(bracketQuantity * spaseCount - 2);
    const spaseClosing = bracket.repeat(bracketQuantity * spaseCount - bracketQuantity);
    const lines = keys.reduce(((acc, key) => {
      if (_.isObject(data1[key]) && _.isObject(data2[key])) {
        acc.push(`${spase}${propGeneral}${key}: ${iter(data1[key], data2[key], spaseCount + 1)}`);
      } else if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
        if (_.isObject(data1[key]) && !_.isObject(data2[key])) {
          acc.push(`${spase}${propFirst}${key}: ${stringify(data1[key], spaseCount)}`);
          if (data2[key]) {
            acc.push(`${spase}${propSecond}${key}: ${data2[key]}`);
          }
        } else if (!_.isObject(data1[key]) && _.isObject(data2[key])) {
          if (data1[key]) {
            acc.push(`${spase}${propFirst}${key}: ${data1[key]}`);
          }
          acc.push(`${spase}${propSecond}${key}: ${stringify(data2[key], spaseCount)}`);
        } else if (data1[key] === data2[key]) {
          acc.push(`${spase}${propGeneral}${key}: ${data1[key]}`);
        } else {
          acc.push(`${spase}${propFirst}${key}: ${data1[key]}`);
          acc.push(`${spase}${propSecond}${key}: ${data2[key]}`);
        }
      } else if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
        if (_.isObject(data1[key])) {
          acc.push(`${spase}${propFirst}${key}: ${stringify(data1[key], spaseCount)}`);
        } else {
          acc.push(`${spase}${propFirst}${key}: ${data1[key]}`);
        }
      } else if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
        if (_.isObject(data2[key])) {
          acc.push(`${spase}${propSecond}${key}: ${stringify(data2[key], spaseCount)}`);
        } else {
          acc.push(`${spase}${propSecond}${key}: ${data2[key]}`);
        }
      }
      return acc;
    }), []);
    return ['{', ...lines, `${spaseClosing}}`].join('\n');
  };
  return iter(obj1, obj2);
};

export default comparison;
