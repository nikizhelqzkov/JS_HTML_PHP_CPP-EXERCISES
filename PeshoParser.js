Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
function isNested(arr) {
  for (const el of arr) {
    if (Array.isArray(el)) {
      return true;
    }
  }
  return false;
}
function nestingArr(arr) {
  let flat = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      if (isNested(el)) {
        el = nestingArr(el);
      }
      for (const n of el) {
        flat.push(n);
      }
    } else {
      flat.push(el);
    }
  }
  return flat;
}
function processData(input) {
  var result = [];
  input = eval(input);
  let numC = 0;

  for (const elem of input) {
    if (typeof elem === "number") {
      ++numC;
    } else if (typeof elem === "string") {
      result.push(elem.split("").reverse().join(""));
    } else if (
      typeof elem === "object" &&
      typeof elem !== "function" &&
      !Array.isArray(elem)
    ) {
      if (Object.size(elem) === 1) {
        let key = Object.keys(elem)[0];
        result.push(`${key}: ${elem[key]}`);
      }
    } else if (Array.isArray(elem)) {
      if (isNested(elem)) {
        result.push(nestingArr(elem));
      } else {
        result.push(elem.sort());
      }
    } else if (typeof elem === "function") {
      result.push(elem(42));
    }
  }
  if (numC > 0) {
    result.unshift(numC);
  }
  console.log(JSON.stringify(result));
}
processData(
  "[1,{'Pesho':3},{'pesho':52},4,'abz',function (el){return (el+1);},[1,2,3,[4,5]],['b',585,845,71,'gs'],895]"
);
processData("['test', 1, 'world', '42', 2]");
