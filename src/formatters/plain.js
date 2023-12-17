import _ from 'lodash';
import quotesForString from './tools/quotesForString.js';

const plain = (data) => {
  const iter = (obj, ancestry = '') => {
    const res = obj.reduce(((acc, el, index, arr) => {
      const newAncestry = _.compact([ancestry, el.key]).join('.');
      if (el.type === 'deleted') {
        acc.push(`Property '${newAncestry}' was removed`);
      } else if (el.type === 'added') {
        if (Array.isArray(el.value) || _.isObject(el.value)) {
          acc.push(`Property '${newAncestry}' was added with value: [complex value]`);
        } else {
          acc.push(`Property '${newAncestry}' was added with value: ${quotesForString(el.value)}`);
        }
      } else if (el.type === 'unchanged' && Array.isArray(el.value)) {
        acc.push(iter(el.value, newAncestry));
      } else if (el.type === 'changedFrom') {
        if (Array.isArray(el.value) || _.isObject(el.value)) {
          const { value } = arr[index + 1];
          acc.push(`Property '${newAncestry}' was updated. From [complex value] to ${quotesForString(value)}`);
        } else {
          const { value } = arr[index + 1];
          acc.push(`Property '${newAncestry}' was updated. From ${quotesForString(el.value)} to ${quotesForString(value)}`);
        }
      }
      return acc;
    }), []);
    return [...res].join('\n');
  };
  return iter(data);
};

export default plain;
