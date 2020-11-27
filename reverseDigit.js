let n = 895;
while (n > 9) {
  console.log(n % 10);
  n = parseInt(n / 10);
}
console.log(n);