import stylish from './stylish.js';
import plain from './plain.js';

const formatter = (file1, file2, format) => {
  let res;
  if (format === 'plain') {
    res = plain(file1, file2);
  } else {
    res = stylish(file1, file2);
  }
  return res;
};

export default formatter;
