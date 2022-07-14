const assert = require("assert");

compress = (s, k = [...s]) =>
  k
    .map((v) => "1" + v)
    .reduce((p, v) =>
      p[p.length - 1] == v[1]
        ? p.substring(0, p.length - 2) + (1 * v[0] + 1 * p[p.length - 2] + p[p.length - 1])
        : p + v
    );

console.log(compress("AAABBC"));
