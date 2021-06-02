function minCountOfSquares(n) {
  let dyn = new Array(n);

  dyn[0] = 0;
  for (let i = 1; i <= n; i++) {
    dyn[i] = i + 1;
    let k = 1;
    let j = 1;
    while (j <= i) {
      if (dyn[i] > dyn[i - j]) {
        dyn[i] = dyn[i - j];
      }
      ++k;
      j = k * k;
    }
    dyn[i]++;
  }

  return dyn[n];
}
console.log(minCountOfSquares(10));
