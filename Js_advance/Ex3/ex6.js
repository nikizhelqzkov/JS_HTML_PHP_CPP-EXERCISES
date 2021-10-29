function notUniqueElements(list, fn) {
  return list.filter(function (elem) {
    return !fn.call(undefined, elem);
  });
}
function isEven(elem) {
  return elem % 2 === 0;
}
console.log(
  uniqueElements([1, 2, 6, 4, -4, 1, 56, 6, 1, 5, 1, -9541, 2232], isEven)
);
