import _ from 'lodash';

const marge = (spaseCount, bracket = ' ', bracketQuantity = 4) => bracket
  .repeat(bracketQuantity * spaseCount - bracketQuantity);

const stringify = (obj, replace) => {
  const iter = (data, depth) => {
    if (!_.isObject(data)) {
      return `${data}`;
    }
    const spaseCount = depth * replace;
    const spase = marge(spaseCount);
    const lines = Object
      .entries(data)
      .map(([key, value]) => `${spase}        ${key}: ${iter(value, depth + 1)}`);

    return ['{', ...lines, `${spase}    }`].join('\n');
  };
  return iter(obj, 1);
};

const stylish = (obj) => {
  const iter = (data, spaseCount = 1) => {
    const spase = marge(spaseCount);
    const res = data.map((el) => {
      switch (el.type) {
        case 'deleted':
          return `${spase}  - ${el.key}: ${stringify(el.value, spaseCount)}`;
        case 'added':
          return `${spase}  + ${el.key}: ${stringify(el.value, spaseCount)} `;
        case 'changed':
          return `${spase}  - ${el.key}: ${stringify(el.value, spaseCount)}\n${spase}  + ${el.key}: ${stringify(el.value2, spaseCount)}`;
        case 'unchanged':
          return `${spase}    ${el.key}: ${stringify(el.value, spaseCount)}`;
        case 'nested':
          return `${spase}    ${el.key}: ${iter(el.value, spaseCount + 1)} `;
        default:
          throw new Error('stylish function crashing');
      }
    });
    return ['{', ...res, `${spase}}`].join('\n');
  };
  return iter(obj);
};

export default stylish;
