function simplify(poly){
  let h = {};
  poly.match(/[+-]?[^+-]+/g).forEach(x => {
    let m = x.match(/[a-z]+/)[0],
        k = x.replace(m, '');
    m = m.split('').sort().join('');
    k = Number(/\d/.test(k) ? k : k+'1');
    h[m] = (h[m]||0) + k;
  });
  return Object.keys(h)
    .filter(m => h[m])
    .sort((x, y) => x.length - y.length || (x < y ? -1 : 1))
    .map((m, i) => ({
      sign : h[m] < 0 ? '-' : i > 0 ? '+' : '',
      k : Math.abs(h[m]),
      m : m
    }))
    .map(o => o.sign + (o.k == 1 ? '' : o.k) + o.m).join('');
}