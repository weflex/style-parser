'use strict';

const Parsimmon = require('parsimmon');
const string = Parsimmon.string;
const regex = Parsimmon.regex;
const seq = Parsimmon.seq;

const ignore = regex(/\s*/m);
const lexeme = (p) => p.skip(ignore);
const startOfLine = lexeme(regex(/\n*/));
const property = seq(
  lexeme(regex(/([^:])+/i)), lexeme(string(':'))
).map((v) => v[0]);
const value = seq(
  lexeme(regex(/([^;])+/i)), lexeme(regex(/(\;)?/))
).map((v) => v[0]);

const cfs = startOfLine.then(
  seq(property, value).many()
).map((v) => {
  return v.reduce((r, d) => {
    let key = d[0];
    let val = d[1];
    switch (key) {
      case 'z-index': val = parseInt(val); break;
      default: break;
    }
    r[key] = val;
    return r;
  }, {});
});

module.exports = function(src) {
  const r = cfs.parse(src);
  if (!r || !r.status) {
    throw new SyntaxError(r.expected);
  }
  return r.value;
};

