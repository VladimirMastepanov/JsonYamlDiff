import _ from "lodash"

const comparison = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2).sort();

  const res = {};
  for (const key of keys) {
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        const keyres = `  ${key}`
        res[keyres] = obj1[key];
      } else {
        const key1 = `- ${key}`;
        const key2 = `+ ${key}`;
        res[key1] = obj1[key];
        res[key2] = obj2[key];
      }
    }
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      const key1 = `- ${key}`;
      res[key1] = obj1[key];
    }
    if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      const key2 = `+ ${key}`;
      res[key2] = obj2[key]
    }
  }
  return res;
};

export default comparison;

