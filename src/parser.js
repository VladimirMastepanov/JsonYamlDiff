import { parse } from 'yaml';

const parser = (type, file) => {
  switch (type) {
    case 'json':
      return JSON.parse(file);
    case 'yaml':
      return parse(file);
    default:
      return 'Unknown type file';
  }
};

export default parser;
