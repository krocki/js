function concat(hi, lo) {

  h = hi.toString(16);
  l = lo.toString(16);
  return parseInt(h+l, 16);
}

hi = 375135
lo = 1775345200
// same as
// hi = parseInt('0x5b95f', 16);
// lo = parseInt('0x69d19e30', 16);

out = concat(hi, lo)
console.log(out)
