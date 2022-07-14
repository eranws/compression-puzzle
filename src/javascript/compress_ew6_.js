const assert = require("assert");

ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
compress = (s, t = 1 + s, k = [...s]) => {
  // return [...ABC].map((x) => x);
  return k
    .map((x, i, a) => [x, (t = t.replace(1 + x + x, 2 + x).replace(x, 1 + x)), console.log(x, i, a, s, t)])
    .pop()[0];
  // return k.map((x) => [x, console.log(x)]);
  return k.map((a) => {
    // s = s.replaceAll(a, 1 + a)// s = ;
    k.map((_, i) => {
      k.map((_, j) => console.log(i + 1, j + 1, s.replace(1 + i + a + j + a, 1 + i + j + a)));
    });
  });
  return s;
};

assert.equal(compress("AABCCC"), "2A1B3C");
// assert.equal(compress("AAABBAAC"), "3A2B2A1C");
