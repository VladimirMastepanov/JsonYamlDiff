import parserYaml from './parcerYml.js';
import parserJson from './parcerJson.js';

const parser = (pathFile, file) => {
  let res;
  if (pathFile.endsWith('json')) {
    res = parserJson(file);
  } else {
    res = parserYaml(file);
  }
  return res;
};

export default parser;
