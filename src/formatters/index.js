import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatter = (data, format) => {
  let res;
  if (format === 'plain') {
    res = plain(data);
  } else if (format === 'json') {
    res = json(data);
  } else {
    res = stylish(data);
  }
  return res;
};

export default formatter;
