function bitCounting(n) {
  let arr = [];
  let counter = 0;
  let br = 0;

  while (n != 0) {
    arr[counter] = n % 2;
    counter++;
    n = n / 2;
    n = parseInt(n);
  }
  console.log(...arr);
  for (let index = 0; index < counter; index++) {
    if (arr[index] == 1) {
      br++;
    }
  }

  return br;
}

console.log(bitCounting(956248651));
