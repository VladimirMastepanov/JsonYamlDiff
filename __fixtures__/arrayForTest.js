const arrayForTest = [
  {
    type: 'nested',
    key: 'common',
    children: [
      { type: 'added', key: 'follow', value1: false },
      { type: 'unchanged', key: 'setting1', value1: 'Value 1' },
      { type: 'deleted', key: 'setting2', value1: 200 },
      {
        type: 'changed', key: 'setting3', value1: true, value2: null,
      },
      { type: 'added', key: 'setting4', value1: 'blah blah' },
      { type: 'added', key: 'setting5', value1: { key5: 'value5' } },
      {
        type: 'nested',
        key: 'setting6',
        children: [
          {
            type: 'nested',
            key: 'doge',
            children: [
              {
                type: 'changed',
                key: 'wow',
                value1: '',
                value2: 'so much',
              },
            ],
          },
          { type: 'unchanged', key: 'key', value1: 'value' },
          { type: 'added', key: 'ops', value1: 'vops' },
        ],
      },
    ],
  },
  {
    type: 'nested',
    key: 'group1',
    children: [
      {
        type: 'changed', key: 'baz', value1: 'bas', value2: 'bars',
      },
      { type: 'unchanged', key: 'foo', value1: 'bar' },
      {
        type: 'changed',
        key: 'nest',
        value1: { key: 'value' },
        value2: 'str',
      },
    ],
  },

  {
    type: 'deleted',
    key: 'group2',
    value1: { abc: 12345, deep: { id: 45 } },
  },
  {
    type: 'added',
    key: 'group3',
    value1: { deep: { id: { number: 45 } }, fee: 100500 },
  },
];

export default arrayForTest;
