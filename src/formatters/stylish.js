import stringify from './tools/stringify.js';

const stylish = (obj) => {
  const propFirst = '- ';
  const propSecond = '+ ';
  const propGeneral = '  ';
  const bracket = ' ';
  const bracketQuantity = 4;

  const iter = (data, spaseCount = 1) => {
    const spase = bracket.repeat(bracketQuantity * spaseCount - 2);
    const spaseClosing = bracket.repeat(bracketQuantity * spaseCount - bracketQuantity);
    const res = data.reduce(((acc, el) => {
      if (el.type === 'deleted' || el.type === 'changedFrom') {
        acc.push(`${spase}${propFirst}${el.key}: ${stringify(el.value, spaseCount)}`);
      } else if (el.type === 'added' || el.type === 'changedTo') {
        acc.push(`${spase}${propSecond}${el.key}: ${stringify(el.value, spaseCount)}`);
      } else if (el.type === 'unchanged') {
        if (Array.isArray(el.value)) {
          acc.push(`${spase}${propGeneral}${el.key}: ${iter(el.value, spaseCount + 1)}`);
        } else {
          acc.push(`${spase}${propGeneral}${el.key}: ${stringify(el.value, spaseCount)}`);
        }
      }
      return acc;
    }), []);

    return ['{', ...res, `${spaseClosing}}`].join('\n');
  };
  return iter(obj);
};

export default stylish;
