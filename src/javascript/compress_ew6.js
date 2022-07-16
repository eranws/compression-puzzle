const assert = require("assert");

//     v-- 105 char ---
compress=(s,k=[...s],m=c=>k.map(c),t=1+k.join(1))=>[m(a=>m((_,i)=>m((_,j)=>(t=t.replace(i+a+j+a,i+j+a))))),t][1]

test = assert.equal;

test(compress("AAA"), "3A");
test(compress("AAAAAAAAAAAAAAAAA"), "17A");
test(compress("AAABBAAC"), "3A2B2A1C");
test(compress("AAAAABBCCC"), "5A2B3C");
test(compress("AAAABBBCCC"), "4A3B3C");
test(compress("AAAABBCCCC"), "4A2B4C");
test(compress("ABCDE"), "1A1B1C1D1E");
test(compress("ABBCCCDDDDEEEEE"), "1A2B3C4D5E");
test(compress("AAABCCCDEEE"), "3A1B3C1D3E");

test(compress("ABABABABABABABA"), "1A1B1A1B1A1B1A1B1A1B1A1B1A1B1A");
