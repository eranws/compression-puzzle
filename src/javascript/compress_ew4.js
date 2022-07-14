const assert = require("assert");

ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
compress = (s, k = [...s]) => {
  [...ABC].forEach((a) => {
    s = s.replaceAll(a, 1 + a);
    k.forEach((_, i) => {
      k.forEach((_, j) => {
        s = s.replaceAll(i + a + j + a, i + j + a);
      });
    });
  });
  return s;
};

assert.equal(compress("AAABBAAC"), "3A2B2A1C");
