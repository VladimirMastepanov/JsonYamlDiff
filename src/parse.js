import yaml from 'js-yaml';

const parse = (type, file) => {
  switch (type) {
    case 'json':
      return JSON.parse(file);
    case 'yaml':
      return yaml.load(file);
    case 'yml':
      return yaml.load(file);
    default:
      return `Unknown type file: ${type}`;
  }
};

export default parse;
