const maxRows = (arr, n) => {
  let dyn = new Array(n);
  let prev = new Array(n);
  dyn[0] = 1;
  prev[0] = -1;
  for (let i = 1; i < n; i++) {
    dyn[i] = 0;
    prev[i] = -1;
    for (let j = 0; j < i; j++) {
      if ((arr[j] * arr[j] * arr[i] * arr[i]) % 2 === 0 && arr[j] < arr[i]) {
        if (dyn[j] > dyn[i]) {
          dyn[i] = dyn[j];
          prev[i] = j;
        }
      }
    }
    dyn[i]++;
  }
  let bestOne = 0;
  for (let i = 0; i < n; i++) {
    if (dyn[i] > dyn[bestOne]) {
      bestOne = i;
    }
  }
  let index = bestOne;
  let row = [];
  console.log(`Elements: `);
  while (index > 0) {
    row.unshift(arr[index]);
    index = prev[index];
  }
  console.log(...row);
  console.log(`Max count is: `);
  return dyn[bestOne];
};
let arr = [1, 2, 4, 2, 3, 45, 2, 85, 22, 12];
console.log(maxRows(arr, arr.length));
