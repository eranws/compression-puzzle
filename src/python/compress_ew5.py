from functools import reduce

#      v--- 114 bytes 
compress=lambda s:reduce(lambda p,v:(p+v,p[:-2]+str(int(v[0])+int(p[-2]))+str(p[-1]))[p[-1]==v[1]],map(lambda v:"1"+v,s))

assert compress("AAABBAAC") == "3A2B2A1C"
