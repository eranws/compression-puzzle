const assert = require("assert");
//     v--- 103 bytes
compress=s=>[...s].map(v=>1+v).reduce((p, v)=>(p.at(-1)==v[1]?p.slice(0,-2)+(1*v[0]+1*p.at(-2)+p.at(-1)):p+v))


assert.equal(compress("AAABBAAC"), "3A2B2A1C");
