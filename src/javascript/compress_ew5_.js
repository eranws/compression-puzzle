const assert = require("assert");

ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
compress = (s, k = [...s], c = 1 + k.join(1)) => {
  return [...ABC].reduce((_p, a) => {
    k.reduce(
      (p1, v1, i) =>
        k.reduce((p2, v2, j) =>
          // console.log(i,j,c)&&
          // i = j = 1;
          c.replaceAll(i + a + j + a, i + j + a)
        ),
      c
    );
  }, c);
};

assert.equal(compress("AAABBAAC"), "3A2B2A1C");
