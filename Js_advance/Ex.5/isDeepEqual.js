const isDeepEqual = (elem1, elem2) => {
  if (typeof elem1 !== typeof elem2) {
    return false;
  }
  if (
    typeof elem1 !== "function" &&
    typeof elem2 !== "function" &&
    typeof elem1 !== "object" &&
    typeof elem2 !== "object"
  ) {
    return elem1 === elem2;
  }
  if (typeof elem1 === "function" && typeof elem2 === "function") {
    return elem1.toString() === elem2.toString();
  }
  if (elem1.length !== elem2.length) {
    return false;
  }
  for (const key in elem1) {
    if (!elem2.hasOwnProperty(key)) {
      return false;
    }
  }
  return Object.keys(elem1).reduce((acc, key) => {
    const result = isDeepEqual(elem1[key], elem2[key]);
    if (!result) {
      console.log("Has Difference");
      console.log("Elem1: ", key, elem1[key]);
      console.log("Elem2: ", key, elem2[key]);
    }
    return acc && result;
  }, true);
  //   for (const key in elem1) {
  //     if (elem2.hasOwnProperty(key)) {
  //       return isDeepEqual(elem1[key], elem2[key]);
  //     }
  //   }
};

console.log(isDeepEqual(1, 2)); // false
console.log(isDeepEqual(1, 1)); // true
console.log(isDeepEqual("str", "str")); // true
console.log(isDeepEqual("str", "str1")); // false
console.log(isDeepEqual({ prop: "p" }, { prop: "p" })); // true
console.log(isDeepEqual({ prop: "p" }, { prop: "p1" })); // false
console.log(isDeepEqual({ prop: [1, 2, 3] }, { prop: [1, 2, 3] })); // true
console.log(isDeepEqual({ prop: [1, 2, 3] }, { prop: [1, 2, 3, 4] })); // false
