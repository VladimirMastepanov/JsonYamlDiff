const arrayForTest = [
  {
    type: 'nested',
    key: 'common',
    value: [
      { type: 'added', key: 'follow', value: false },
      { type: 'unchanged', key: 'setting1', value: 'Value 1' },
      { type: 'deleted', key: 'setting2', value: 200 },
      {
        type: 'changed', key: 'setting3', value: true, value2: null,
      },
      { type: 'added', key: 'setting4', value: 'blah blah' },
      { type: 'added', key: 'setting5', value: { key5: 'value5' } },
      {
        type: 'nested',
        key: 'setting6',
        value: [
          {
            type: 'nested',
            key: 'doge',
            value: [
              {
                type: 'changed',
                key: 'wow',
                value: '',
                value2: 'so much',
              },
            ],
          },
          { type: 'unchanged', key: 'key', value: 'value' },
          { type: 'added', key: 'ops', value: 'vops' },
        ],
      },
    ],
  },
  {
    type: 'nested',
    key: 'group1',
    value: [
      {
        type: 'changed', key: 'baz', value: 'bas', value2: 'bars',
      },
      { type: 'unchanged', key: 'foo', value: 'bar' },
      {
        type: 'changed',
        key: 'nest',
        value: { key: 'value' },
        value2: 'str',
      },
    ],
  },

  {
    type: 'deleted',
    key: 'group2',
    value: { abc: 12345, deep: { id: 45 } },
  },
  {
    type: 'added',
    key: 'group3',
    value: { deep: { id: { number: 45 } }, fee: 100500 },
  },
];

export default arrayForTest;
