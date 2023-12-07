import { parse } from 'yaml';

const parserJson = (str) => JSON.parse(str);
const parserYaml = (str) => parse(str);

export { parserJson, parserYaml };
