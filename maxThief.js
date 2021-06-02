function maxThief(arr) {
  let n = arr.length;
  let dyn = new Array(n);
  let addElem = [];
  dyn[0] = arr[0];
  addElem[0] = true;
  dyn[1] = Math.max(arr[0], arr[1]);
  addElem[1] = dyn[1] > dyn[0];
  for (let i = 2; i < n; i++) {
    dyn[i] = Math.max(dyn[i - 1], dyn[i - 2] + arr[i]);
    addElem[i] = dyn[i - 2] + arr[i] > dyn[i - 1];
  }
  for (let i = addElem.length - 1; i >= 0; i--) {
    if (addElem[i]) {
      console.log(i+1);
      --i;
    }
  }
  return dyn[n - 1];
}

let arr = [100, 1, 1, 100];

console.log(maxThief(arr));
