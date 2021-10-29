function compose() {
  let arr = Array.prototype.slice.call(arguments).reverse();
  return function () {
    let startArgs = Array.prototype.slice.call(arguments);
    let result = arr.reduce(function (acc, cur, index) {
      return cur.apply(undefined, index === 0 ? acc : [acc]);
    }, startArgs);
    return result;
  };
}

// var addOne = (x) => x + 1;
// var sqrt = (x) => x * x;
// var log = (x) => console.log(x);

// addOneSqrtAndPrint = compose(log, sqrt, addOne);

// addOneSqrtAndPrint(1); // 4
function sum(a, b) {
  return a + b;
}
function multiplyBy3(a) {
  return a * 3;
}
function mkArr(a) {
  return [a];
}

var addMultiply = compose(multiplyBy3, mkArr,sum);
console.log(addMultiply(10, 29));
