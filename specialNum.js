const bellNum = (n) => {
  let dyn = [];
  for (let i = 0; i < n; i++) {
    dyn.push(new Array(i + 1).fill(0));
  }
  dyn[0][0] = 1;

  for (let i = 1; i < n; i++) {
    dyn[i][0] = dyn[i - 1][i - 1];
    for (let j = 1; j <= i; j++) {
      dyn[i][j] = dyn[i][j - 1] + dyn[i - 1][j - 1];
    }
  }
  console.log(...dyn);
  return dyn[n - 1][0];
};

const oilerNumFirstRow = (n, k) => {
  let dyn = [];
  for (let i = 0; i < n; i++) {
    dyn.push(new Array(i + 1).fill(0));
  }
  dyn[0][0] = 1;

  for (let i = 1; i < n; i++) {
    dyn[i][0] = 1;                           //i=2    j=1    dyn[2][1]
    for (let j = 1; j <= i; j++) {
      if (j === i) {
        dyn[i][j] = 1;
      } else {
        dyn[i][j] = (i+1 - j) * dyn[i - 1][j - 1] + (j + 1) * dyn[i - 1][j];
      }
    }
  }
  console.log(...dyn);
  return dyn[n - 1][k];
};
console.log(oilerNumFirstRow(8, 6));
