import yaml from 'js-yaml';

const parse = (file, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(file);
    case 'yaml':
    case 'yml':
      return yaml.load(file);
    default:
      return `Unknown type file: ${type}`;
  }
};

export default parse;
