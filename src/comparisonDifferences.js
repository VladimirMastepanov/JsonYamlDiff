import _ from 'lodash';

const comparisonDifferences = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = keys.toSorted();
  const res = sortedKeys.map((key) => {
    if (!Object.hasOwn(obj2, key)) {
      return {
        type: 'deleted', key, value1: obj1[key],
      };
    }
    if (!Object.hasOwn(obj1, key)) {
      return { type: 'added', key, value1: obj2[key] };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { type: 'nested', key, children: comparisonDifferences(obj1[key], obj2[key]) };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        type: 'changed', key, value1: obj1[key], value2: obj2[key],
      };
    }
    return { type: 'unchanged', key, value1: obj1[key] };
  });
  return res;
};

export default comparisonDifferences;
