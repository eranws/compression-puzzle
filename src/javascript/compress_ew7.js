const assert = require("assert");

ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
compress = (s, t = 1 + s, k = [...s]) => {
  // return [...ABC].map((x) => x);
  return k
    .map((x, i, a) => [x, (t = t.replace(1 + x + x, 2 + x).replace(x, 1 + x)), console.log(x, i, a, s, t)])
    .pop()[0];
};

// assert.equal(compress("AABCCC"), "2A1B3C");
// assert.equal(compress("AAABBAAC"), "3A2B2A1C");

f = (x) => (y) => console.log(x > 0 ? y + x : x + y);
pv = (x) => (y) => {
  console.log(x[0] == y[0] ? y + x : x + y);
  return x + y;
};
// f = ff(console.log);
// f = ff(console.log);
s = "AAABBAAC";
console.log("s: ", s);

compress = (s, k = [...s]) => k.map((v) => v).reduce((p, v, i, a) => p + p[0] * v[0]); //p+v
// compress = (s, k = [...s]) => k.map((v) => v).reduce((p, v, i, a) => p + p[0] * v[0]); //p+v
// compress = (s, k = [...(1 + [...s].join(1))]) =>
compress = (s, k = [...s]) =>
  // [1, ...k.join(1)]
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

console.log(compress(s));
for (c of s) {
  for (c2 of s) {
    // f(c)(c2);
  }
}

a = "a";
b = 2;
f(a)(a);
f(a)(b);
f(b)(a);
f(b)(b);
