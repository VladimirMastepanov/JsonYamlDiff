import _ from 'lodash';

const json = (data) => {
  const res = data.reduce(((acc, el) => {
    if (!Array.isArray(el.value)) {
      const newValue = _.cloneDeep(el.value);
      const { key } = el;
      const { type } = el;
      const newType = type;
      acc.push({ type: newType, [key]: newValue });
    } else if (Array.isArray(el.value)) {
      const { key } = el;
      const { type } = el;
      const newType = type;
      const newValue = [...el.value];
      acc.push({ type: newType, [key]: json(newValue) });
    }
    return acc;
  }), []);
  return res;
};

const toJson = (array) => JSON.stringify(json(array));

export default toJson;
