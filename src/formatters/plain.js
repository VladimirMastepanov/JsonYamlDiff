import _ from 'lodash';

const plain = (data1, data2) => {
  const iter = (obj1, obj2, ancestry) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.union(keys1, keys2).sort();
    const res = keys.reduce(((acc, key) => {
      ancestry.push(key);
      const newAncestry = ancestry.join('.');
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        acc.push(`Property '${newAncestry}' ${iter(obj1[key], obj2[key], newAncestry)}`);
      } else if (!Object.hasOwn(obj1, key)) {
        if (_.isObject(obj2[key])) {
          acc.push(`Property '${newAncestry}' was added with value: [complex value]`);
        } else {
          acc.push(`Property '${newAncestry}' was added with value: '${obj2[key]}'`);
        }
      } else if (!Object.hasOwn(obj2, key)) {
        acc.push(`Property '${newAncestry}' was removed`);
      } else if (_.isObject(obj1[key]) && !_.isObject(obj2[key])) {
        acc.push(`Property '${newAncestry}' was updated. From [complex value] to '${obj2[key]}'`);
      } else if (!_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        acc.push(`Property '${newAncestry}' was updated. From '${obj1[key]}' to [complex value]`);
      } else if (obj1[key] !== obj2[key]) {
        acc.push(`Property '${newAncestry}' was updated. From '${obj1[key]}' to '${obj2[key]}'`);
      }
      return acc;
    }), []);
    return [...res].join('\n');
  };
  return iter(data1, data2, []);
};

export default plain;
