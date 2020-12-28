const fib = (n, memory = {}) => {
  if (n in memory) {
    return memory[n];
  }
  if (n <= 2) {
    return 1;
  }
  memory[n] = fib(n - 1, memory) + fib(n - 2, memory);
  return memory[n];
};
const fib2 = (n) => {
  if (n <= 2) return 1;
  return fib2(n - 1) + fib(n - 2);
};


console.log(fib(1476));
console.log(fib2(1476));
