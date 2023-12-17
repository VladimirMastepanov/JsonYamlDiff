import _ from 'lodash';

const stringify = (obj, replace) => {
  const spase = '    ';

  const iter = (data, depth) => {
    if (!_.isObject(data)) {
      return `${data}`;
    }
    const currentIndent = spase.repeat(replace * depth);
    const lines = Object
      .entries(data)
      .map(([key, value]) => `${currentIndent}    ${key}: ${iter(value, depth + 1)}`);

    return ['{', ...lines, `${currentIndent}}`].join('\n');
  };
  return iter(obj, 1);
};

export default stringify;
