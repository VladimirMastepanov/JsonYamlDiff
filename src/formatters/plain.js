import _ from 'lodash';

const stringify = (data) => {
  if (Array.isArray(data) || _.isObject(data)) {
    return '[complex value]';
  }
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
};

const plain = (data) => {
  const iter = (obj, ancestry = '') => {
    const res = obj.map((el) => {
      const newAncestry = _.compact([ancestry, el.key]).join('.');
      switch (el.type) {
        case 'unchanged':
          return null;
        case 'deleted':
          return `Property '${newAncestry}' was removed`;
        case 'added':
          return `Property '${newAncestry}' was added with value: ${stringify(el.value)}`;
        case 'changed':
          return `Property '${newAncestry}' was updated. From ${stringify(el.value1)} to ${stringify(el.value2)}`;
        case 'nested':
          return iter(el.children, newAncestry);
        default:
          throw new Error('plain function crashing');
      }
    });
    return _.compact([...res]).join('\n');
  };
  return iter(data);
};

export default plain;
