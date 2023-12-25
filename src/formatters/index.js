import stylish from './stylish.js';
import plain from './plain.js';

const formatter = (data, format) => {
  switch (format) {
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data);
    case undefined:
      return stylish(data);
    default:
      throw new Error('Unknown formatting style');
  }
};

export default formatter;
