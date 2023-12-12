import _ from 'lodash';

const quotesForString = (data) => {
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
};

const plain = (data1, data2) => {
  const iter = (obj1, obj2, ancestry, count = 0) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.union(keys1, keys2).sort();
    const res = keys.reduce(((acc, key) => {
      ancestry.push(key);
      console.log(ancestry, count);
      if (!Object.hasOwn(obj1, key)) {
        if (_.isObject(obj2[key])) {
          acc.push(`Property '${ancestry.join('.')}' was added with value: [complex value]`);
          ancestry.splice(0, count);
        } else {
          acc.push(`Property '${ancestry.join('.')}' was added with value: ${quotesForString(obj2[key])}`);
          ancestry.splice(0, count);
        }
      } else if (!Object.hasOwn(obj2, key)) {
        acc.push(`Property '${ancestry.join('.')}' was removed`);
        ancestry.splice(0, count);
      } else if (_.isObject(obj1[key]) && !_.isObject(obj2[key])) {
        acc.push(`Property '${ancestry.join('.')}' was updated. From [complex value] to ${quotesForString(obj2[key])})`);
        ancestry.splice(0, count);
      } else if (!_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        acc.push(`Property '${ancestry.join('.')}' was updated. From ${quotesForString(obj1[key])} to [complex value]`);
        ancestry.splice(0, count);
      } else if (!_.isObject(obj1[key]) && !_.isObject(obj2[key]) && obj1[key] !== obj2[key]) {
        acc.push(`Property '${ancestry.join('.')}' was updated. From ${quotesForString(obj1[key])} to ${quotesForString(obj2[key])}`);
        ancestry.splice(count, ancestry.length);
      } else if (obj1[key] === obj2[key]) {
        ancestry.splice(0, count);
      } else if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        acc.push(iter(obj1[key], obj2[key], ancestry, count + 1));
      }
      return acc;
    }), []);
    return [...res].join('\n');
  };
  return iter(data1, data2, []);
};

export default plain;
