function result(expression) {
  if (!expression || typeof expression !== "string" || ! expression.length) {
    return "0/0";
  }
  function evaluation(expression) {
    let evalArr = expression
      .split("=")
      .map((el) => el.trim())
      .map((element) => {
        return eval(element);
      });
    return evalArr;
  }
  let evalArr = evaluation(expression);
  function countCorrect(evalArr) {
    let correctAns = evalArr[0];
    let correctSteps = 0;
    evalArr.forEach(function (element, index, arr) {
      if (element === arr[index + 1] && index < arr.length - 1) {
        ++correctSteps;
      }
    });
    return correctSteps;
  }
  return `${countCorrect(evalArr)}/${evalArr.length - 1}`;
}

console.log(result("7-3*2+1=4*2+1=8+1=9"));
// console.log(
//   "jrigw fwokfew".split(" ").reduce((accumulator, element) => {
//     return accumulator.concat(element);
//   }, "")
// );
// console.log("jrigw fwokfew".replace(" ", ""));
// console.log('7-3*2+1=4*2+1=8+1=9'.split("="));
