function isEqual(m, el) {
  for (const [key, value] of m) {
    if (el !== value) {
      return false;
    }
  }
  return true;
}

function processData(input) {
  let m = new Map();
  let temp = input.toLowerCase();
  for (const el of temp) {
    if (m.has(el)) {
      m.set(el, m.get(el) + 1);
    } else {
      m.set(el, 1);
    }
  }
  let count = m.get(temp[0]);
  let isOk = true;
  let isBad = false;
  let res = -1;
  let rep = 0;
  let currentKey = temp[0];
  for (const [key, value] of m) {
    console.log(value, count);
    if (count - value > 1) {
      console.log("UGLY");
      return;
    } else if (count - value === 0) {
      currentKey = key;
    } else if (count - value === 1 && rep < 1) {
      isOk = false;
      isBad = true;
      ++rep;
      let tempM = m;
      tempM.set(currentKey, count - 1);
      if (isEqual(tempM, count - 1)) {
        console.log("BAD");
        return;
      }
      //else {
      //   console.log("UGLY");
      //   return;
      // }
      currentKey = key;
      count = value;
    } else if (count - value === 1 && rep >= 1) {
      console.log("UGLY");
      return;
    }
  }

  if (isOk) {
    console.log("GOOD");
  } else {
    console.log("BAD");
  }
}
console.log(processData("ffaafbb"));
