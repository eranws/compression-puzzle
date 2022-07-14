const assert = require("assert");

ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
compress = (s, t = 1 + s, k = [...s]) =>
  // k.map((x, i, a) => [x, (t = t.replace(1 + x + x, 2 + x).replace(x, 1 + x)), console.log(x, i, a, s, t)]).pop()[0];
  k.map((x, i, a) => [x, (t = t.replace(x, 1 + x)), console.log(x, i, a, s, t)]).pop()[0];

assert.equal(compress("AABCCC"), "2A1B3C");
// assert.equal(compress("AAABBAAC"), "3A2B2A1C");
