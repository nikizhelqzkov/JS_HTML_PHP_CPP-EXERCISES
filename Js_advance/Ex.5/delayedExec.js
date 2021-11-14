const delayedExec = (func) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      if (func === undefined) {
        reject("The function is undefined");
      }
      setTimeout(() => {
        resolve(func(...args));
      }, 10000);
    });
  };
};

const sum = (a, b) => a + b;
const delExec = delayedExec(sum);
delExec(2, 5).then(console.log);
