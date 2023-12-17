const propFirst = '- ';
const propSecond = '+ ';
const propGeneral = '  ';
const spase2 = '  ';
const spase4 = '    ';

const stylishStringForTest = `{\n${spase2}common: {\n${spase2}${propSecond}follow: false\n${spase2}${propGeneral}\nsetting1: Value 1\n${spase2}${propFirst}setting2: 200\n${spase2}${propFirst}setting3: true\n${spase2}${propSecond}setting3: null\n${spase2}${propSecond}setting4: blah blah\n${spase2}${propSecond}setting5: {\n${spase4}${propGeneral}key5: value5\n${spase4}}\n${spase4}setting6: {\n${spase4}${spase4}doge: {\n${spase4}${spase4}${propFirst}wow:\n${spase4}${spase4}${spase2}${propSecond}wow: so much\n${spase4}${spase4}}\n${spase4}${spase4}key: value\n${spase2}${spase4}${propSecond}ops: vops\n${spase4}}\n}\ngroup1: {\n${spase2}${propFirst}baz: bas\n${spase2}${propSecond}baz: bars\n${spase4}foo: bar\n${spase2}${propFirst}nest: {\n${spase4}${spase4}key: value\n${spase4}}\n${spase2}${propSecond}nest: str\n}\n${propFirst}group2: {\n${spase4}abc: 12345\n${spase4}deep: {\n${spase4}${spase4}id: 45\n${spase4}}\n}\n${propSecond}group3: {\n${spase4}deep: {\n${spase4}${spase4}id: {\n${spase4}${spase4}${spase4}number: 45\n${spase4}${spase4}}\n${spase4}}\n${spase4}fee: 100500\n}\n}`;

export default stylishStringForTest;
