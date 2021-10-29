function smallestElement(list, cmp) {
  return list.reduce(function (acc, cur) {
    if (cmp.call(null, acc, cur)>0) {
      return cur;
    }
    return acc;
  }, list[0]);
}
function cmp(a, b) {
  return a - b;
}
function cmpBoolean(a, b) {
  return a - b < 0 ? 0 : 1;
}
function cmp2(a, b) {
  return a > b ? true : false;
}
console.log(smallestElement([1, 2, 6, 2, 8, 2, 4, 59, -5, 6, 4], cmp));
console.log(smallestElement([1, 2, 6, 2, 8, 2, 4, 59, -5, 6, 4], cmp2));
