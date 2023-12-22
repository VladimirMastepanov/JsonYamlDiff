import _ from 'lodash';

const comparisonDifferences = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2).sort();
  const res = keys.map((key) => {
    if (!Object.hasOwn(obj2, key)) {
      const newObj = _.cloneDeep(obj1[key]);
      const [newKey] = [key];
      return {
        type: 'deleted', key: newKey, value: newObj,
      };
    }
    if (!Object.hasOwn(obj1, key)) {
      const newObj = _.cloneDeep(obj2[key]);
      const [newKey] = [key];
      return { type: 'added', key: newKey, value: newObj };
    }
    if (_.isObject(obj1[key]) && !_.isObject(obj2[key])) {
      const newObj = _.cloneDeep(obj1[key]);
      const [newKey] = [key];
      return {
        type: 'changed', key: newKey, value: newObj, value2: obj2[key],
      };
    }
    if (!_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const newObj = _.cloneDeep(obj2[key]);
      const [newKey] = [key];
      return {
        type: 'changed', key: newKey, value: obj1[key], value2: newObj,
      };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const [newKey] = [key];
      return { type: 'nested', key: newKey, value: comparisonDifferences(obj1[key], obj2[key]) };
    }
    if (obj1[key] !== obj2[key]) {
      const [newKey] = [key];
      return {
        type: 'changed', key: newKey, value: obj1[key], value2: obj2[key],
      };
    }
    const [newKey] = [key];
    return { type: 'unchanged', key: newKey, value: obj1[key] };
  });
  return res;
};

export default comparisonDifferences;
