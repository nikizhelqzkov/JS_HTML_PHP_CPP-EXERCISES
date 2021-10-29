function combineList(list, fn) {
  return list.reduce(
    function (acc, cur) {
      if (fn.call(null, cur) > 0) {
        acc[0].push(cur);
        return acc;
      }
      acc[1].push(cur);
      return acc;
    },
    [[], []]
  );
}
function isBiggerThan5(a) {
  return a > 5;
}

console.log(combineList([1, 2, 6, 2, 8, 2, 4, 59, -5, 6, 4], isBiggerThan5));
