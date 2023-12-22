import _ from 'lodash';

const quotesForString = (data) => {
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
};

const dataAnalis = (data) => {
  if (Array.isArray(data) || _.isObject(data)) {
    return '[complex value]';
  }
  return quotesForString(data);
};

const plain = (data) => {
  const iter = (obj, ancestry = '') => {
    const res = obj.map((el) => {
      const newAncestry = _.compact([ancestry, el.key]).join('.');
      switch (el.type) {
        case 'unchanged':
          return '';
        case 'deleted':
          return `Property '${newAncestry}' was removed`;
        case 'added':
          return `Property '${newAncestry}' was added with value: ${dataAnalis(el.value)}`;
        case 'changed':
          return `Property '${newAncestry}' was updated. From ${dataAnalis(el.value)} to ${dataAnalis(el.value2)}`;
        case 'nested':
          return iter(el.value, newAncestry);
        default:
          throw new Error('plain function crashing');
      }
    });
    return _.compact([...res]).join('\n');
  };
  return iter(data);
};

export default plain;
