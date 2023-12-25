import { parse as yamlParse } from 'yaml';

const parse = (type, file) => {
  switch (type) {
    case 'json':
      return JSON.parse(file);
    case 'yaml':
      return yamlParse(file);
    case 'yml':
      return yamlParse(file);
    default:
      return `Unknown type file: ${type}`;
  }
};

export default parse;
