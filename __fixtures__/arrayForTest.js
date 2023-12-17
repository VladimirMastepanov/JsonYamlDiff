const arrayForTest = [
  {
    type: 'unchanged',
    key: 'common',
    value: [
      { type: 'added', key: 'follow', value: false },
      { type: 'unchanged', key: 'setting1', value: 'Value 1' },
      { type: 'deleted', key: 'setting2', value: 200 },
      { type: 'changedFrom', key: 'setting3', value: true },
      { type: 'changedTo', key: 'setting3', value: null },
      { type: 'added', key: 'setting4', value: 'blah blah' },
      { type: 'added', key: 'setting5', value: { key5: 'value5' } },
      {
        type: 'unchanged',
        key: 'setting6',
        value: [{
          type: 'unchanged',
          key: 'doge',
          value: [
            { type: 'changedFrom', key: 'wow', value: '' },
            { type: 'changedTo', key: 'wow', value: 'so much' },
          ],
        },
        { type: 'unchanged', key: 'key', value: 'value' },
        { type: 'added', key: 'ops', value: 'vops' },
        ],
      },
    ],
  },
  {
    type: 'unchanged',
    key: 'group1',
    value: [
      { type: 'changedFrom', key: 'baz', value: 'bas' },
      { type: 'changedTo', key: 'baz', value: 'bars' },
      { type: 'unchanged', key: 'foo', value: 'bar' },
      { type: 'changedFrom', key: 'nest', value: { key: 'value' } },
      { type: 'changedTo', key: 'nest', value: 'str' }],
  },
  {
    type: 'deleted',
    key: 'group2',
    value: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
  },
  {
    type: 'added',
    key: 'group3',
    value: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
  },
];

export default arrayForTest;
