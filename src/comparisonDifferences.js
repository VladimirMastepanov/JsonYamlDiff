import _ from 'lodash';

const comparisonDifferences = (obj1, obj2) => {
  const added = 'added';
  const deleted = 'deleted';
  const unchanged = 'unchanged';
  const changedFrom = 'changedFrom';
  const changedTo = 'changedTo';

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2).sort();
  const res = keys.reduce(((acc, key) => {
    if (!Object.hasOwn(obj2, key)) {
      if (_.isObject(obj1[key])) {
        const newObj = _.cloneDeep(obj1[key]);
        const [newKey] = [key];
        acc.push({ type: deleted, key: newKey, value: newObj });
      } else {
        const [newKey] = [key];
        acc.push({ type: deleted, key: newKey, value: obj1[key] });
      }
    } else if (!Object.hasOwn(obj1, key)) {
      if (_.isObject(obj2[key])) {
        const newObj = _.cloneDeep(obj2[key]);
        const [newKey] = [key];
        acc.push({ type: added, key: newKey, value: newObj });
      } else {
        const [newKey] = [key];
        acc.push({ type: added, key: newKey, value: obj2[key] });
      }
    } else if (_.isObject(obj1[key]) && !_.isObject(obj2[key])) {
      const newObj = _.cloneDeep(obj1[key]);
      const [newKey] = [key];
      acc.push({ type: changedFrom, key: newKey, value: newObj });
      acc.push({ type: changedTo, key: newKey, value: obj2[key] });
    } else if (!_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const newObj = _.cloneDeep(obj2[key]);
      const [newKey] = [key];
      acc.push({ type: changedFrom, key: newKey, value: obj1[key] });
      acc.push({ type: changedTo, key: newKey, value: newObj });
    } else if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const [newKey] = [key];
      acc.push(
        { type: unchanged, key: newKey, value: comparisonDifferences(obj1[key], obj2[key]) },
      );
    } else if (!_.isObject(obj1[key]) && !_.isObject(obj2[key])) {
      if (obj1[key] !== obj2[key]) {
        const [newKey] = [key];
        acc.push({ type: changedFrom, key: newKey, value: obj1[key] });
        acc.push({ type: changedTo, key: newKey, value: obj2[key] });
      } else {
        const [newKey] = [key];
        acc.push({ type: unchanged, key: newKey, value: obj1[key] });
      }
    }
    return acc;
  }), []);
  return res;
};

export default comparisonDifferences;
