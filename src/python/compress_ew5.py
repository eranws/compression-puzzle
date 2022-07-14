from functools import reduce

# def red(p, v):
#     res = p + v
#     if p[-1] == v[1]:
#         res = p[:-2] + str(int(v[0]) + int(p[-2])) + str(p[-1])
#     # print(p, v, p[-2], p[-1], p[:-2], res)
#     return res

# red = lambda p, v: (p + v, p[:-2] + str(int(v[0]) + int(p[-2])) + str(p[-1]))[
#     p[-1] == v[1]]

# def compress(s):
#     m = map(lambda v: "1" + v, s)
#     r = reduce(red, m)
#     return r

#      v--- 114 bytes 
compress=lambda s:reduce(lambda p,v:(p+v,p[:-2]+str(int(v[0])+int(p[-2]))+str(p[-1]))[p[-1]==v[1]],map(lambda v:"1"+v,s))

print(compress("AAABBAAC"))
# assert compress("AAABBAAC") == "3A2B2A1C"
