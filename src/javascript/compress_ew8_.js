const assert = require("assert");

compress = (s, k = [...s]) =>
  k
    .map((v) => "1" + v)
    .reduce((p, v, i, a) => {
      pl = p.length;
      p0 = p[pl - 2];
      p1 = p[pl - 1];
      if (p1 == v[1]) {
        ret = p.substring(0, pl - 2) + (1 * v[0] + 1 * p0 + p1);
      } else {
        ret = p + v;
      }
      console.log([p, v, i, ret].join("\t"));
      return ret;
    });

console.log(compress("AAABBC"));
