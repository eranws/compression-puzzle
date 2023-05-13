const assert = require("assert");
P = (x) => [x, console.log(x)][0];
G = (x) => P(x);
ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
compress = (s, k = [...s]) => {
  s = 1 + k.join(1); // 'aa'
  // k.map(v=>1+v)    // ['a', 'a']
  t = (c) => k.map(c);
  // a = t((v) => 1 + v); // ['a', 'a']
  // [...ABC]
  t((a) => G(t((_, i) => G(t((_, j) => G((s = s.replaceAll(i + a + j + a, i + j + a))))))));
  // k.map((a) => G(k.map((_, i) => G(k.map((_, j) => G((s = s.replaceAll(i + a + j + a, i + j + a))))))));
  // k.forEach((a) => G(k.map((_, i) => G(k.map((_, j) => (s = G(s.replaceAll(i + a + j + a, i + j + a))))))));
  // [...ABC].forEach((a) => G(k.map((_, i) => G(k.map((_, j) => (s = G(s.replaceAll(i + a + j + a, i + j + a))))))));
  return s;
};


// // \AAABBAAC
// // A
// // A
// // A
// // B
// // B
// // A
// // A
// // C

test = assert.equal;
// test = console.log;
// test(compress("AAA"), "3A");
test(compress("AAAAAAAAAAAAAAAAA"), "17A");
test(compress("AAABBAAC"), "3A2B2A1C");
test(compress("AAAAABBCCC"), "5A2B3C");
test(compress("AAAABBBCCC"), "4A3B3C");
test(compress("AAAABBCCCC"), "4A2B4C");
test(compress("ABCDE"), "1A1B1C1D1E");
test(compress("ABBCCCDDDDEEEEE"), "1A2B3C4D5E");
test(compress("AAABCCCDEEE"), "3A1B3C1D3E");

test(compress("ABABABABABABABA"), "1A1B1A1B1A1B1A1B1A1B1A1B1A1B1A");
