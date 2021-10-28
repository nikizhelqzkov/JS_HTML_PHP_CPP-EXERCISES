function curry(fn) {
  return function curried() {
    let arr = Array.prototype.slice.call(arguments);
    if (arr.length >= fn.length) {
      return fn.apply(null, arr);
    } else {
      return function () {
        let arg = Array.prototype.slice.call(arguments);
        arr = arr.concat(arg);
        return curried.apply(null, arr);
      };
    }
  };
}
function trippleAdd(a, b, c) {
  return a + b + c;
}

cTrippleAdd = curry(trippleAdd);

console.log(cTrippleAdd(1)(2)(3)); //6
console.log(cTrippleAdd(1, 2)(3)); //6
console.log(cTrippleAdd(1, 2, 3)); //6
