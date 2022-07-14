const assert = require("assert");

ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
compress = (s) => {
  s = 1 + [...s].join(1);
  n = s.length;
  for (a of ABC) {
    for (i = 1; i < n; i++) {
      for (j = 1; j < n; j++) {
        s = s.replaceAll(i + a + j + a, i + j + a);
      }
    }
  }
  return s;
};

assert.equal(compress("AAABBAAC"), "3A2B2A1C");
