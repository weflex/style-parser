'use strict';

const test = require('tape');
const parse = require('./index.js');

function testit(desc, source, expect) {
  test(desc, t => {
    const r = parse(source);
    t.deepEqual(r, expect);
    t.end();
  });
}

testit('singleline', 'foo:bar;', {
  foo: 'bar'
});
testit('multiline', 'foo:bar;zero:bar;', {
  foo: 'bar',
  zero: 'bar'
});
testit('number(z-index)', 'z-index:20;', {
  'z-index': 20
});

testit('without semi-colon', 'foo:bar', {
  foo: 'bar'
});
testit('multiline without semi-colon', 'foo:bar;font-text:10px', {
  foo: 'bar',
  'font-text': '10px'
});
