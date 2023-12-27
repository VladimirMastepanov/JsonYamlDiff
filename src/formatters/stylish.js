import _ from 'lodash';

const getIndent = (spaseCount, bracket = ' ', bracketQuantity = 4) => bracket
  .repeat(bracketQuantity * spaseCount - bracketQuantity);

const stringify = (obj, replace) => {
  const iter = (data, depth) => {
    if (!_.isObject(data)) {
      return `${data}`;
    }
    const spaseCount = depth * replace;
    const spase = getIndent(spaseCount);
    const lines = Object
      .entries(data)
      .map(([key, value]) => `${spase}        ${key}: ${iter(value, depth + 1)}`);
    return ['{', ...lines, `${spase}    }`].join('\n');
  };
  return iter(obj, 1);
};

const stylish = (obj) => {
  const iter = (data, spaseCount = 1) => {
    const indent = getIndent(spaseCount);
    const res = data.map((el) => {
      switch (el.type) {
        case 'deleted':
          return `${indent}  - ${el.key}: ${stringify(el.value1, spaseCount)}`;
        case 'added':
          return `${indent}  + ${el.key}: ${stringify(el.value1, spaseCount)}`;
        case 'changed':
          return [
            `${indent}  - ${el.key}: ${stringify(el.value1, spaseCount)}`,
            `${indent}  + ${el.key}: ${stringify(el.value2, spaseCount)}`,
          ].join('\n');
        case 'unchanged':
          return `${indent}    ${el.key}: ${stringify(el.value1, spaseCount)}`;
        case 'nested':
          return `${indent}    ${el.key}: ${iter(el.children, spaseCount + 1)}`;
        default:
          throw new Error('stylish function crashing');
      }
    });
    return ['{', ...res, `${indent}}`].join('\n');
  };
  return iter(obj);
};

export default stylish;
