import _ from 'lodash';

const comparisonDifferences = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2).sort();
  const res = keys.map((key) => {
    if (!Object.hasOwn(obj2, key)) {
      if (_.isObject(obj1[key])) {
        const newObj = _.cloneDeep(obj1[key]);
        const [newKey] = [key];
        return {
          type: 'deleted', key: newKey, value: { ...newObj, type: 'nested' },
        };
      } else {
        const [newKey] = [key];
        return { type: 'deleted', key: newKey, value: obj1[key] };
      }
    } else if (!Object.hasOwn(obj1, key)) {
      if (_.isObject(obj2[key])) {
        const newObj = _.cloneDeep(obj2[key]);
        const [newKey] = [key];
        return { type: 'added', key: newKey, value: { ...newObj, type: 'nested' } };
      } else {
        const [newKey] = [key];
        return { type: 'added', key: newKey, value: obj2[key] };
      }
    } else if (_.isObject(obj1[key]) && !_.isObject(obj2[key])) {
      const newObj = _.cloneDeep(obj1[key]);
      const [newKey] = [key];
      return {
        type: 'changed', key: newKey, value: { ...newObj, type: 'nested' }, value2: obj2[key],
      };
    } else if (!_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const newObj = _.cloneDeep(obj2[key]);
      const [newKey] = [key];
      return {
        type: 'changed', key: newKey, value: obj1[key], value2: { ...newObj, type: 'nested' },
      };
    } else if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const [newKey] = [key];
      return { type: 'unchanged', key: newKey, value: comparisonDifferences(obj1[key], obj2[key]) };
    } else if (!_.isObject(obj1[key]) && !_.isObject(obj2[key])) {
      if (obj1[key] !== obj2[key]) {
        const [newKey] = [key];
        return {
          type: 'changed', key: newKey, value: obj1[key], value2: obj2[key],
        };
      } else {
        const [newKey] = [key];
        return { type: 'unchanged', key: newKey, value: obj1[key] };
      }
    }
  });
  return res;
};

export default comparisonDifferences;
