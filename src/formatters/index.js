import stylish from './stylish.js';
import plain from './plain.js';

const formatter = (data, format) => {
  switch (format) {
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data);
    case 'stylish':
      return stylish(data);
    default:
      return 'Unknown formatting style';
  }
};

export default formatter;
