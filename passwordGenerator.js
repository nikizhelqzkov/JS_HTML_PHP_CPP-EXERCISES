isHasAnUpper = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      return true;
    }
  }
  return false;
};
isHasALower = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      return true;
    }
  }
  return false;
};
isHasANumber = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      return true;
    }
  }
  return false;
};
isHasAnOthers = (str, other) => {
  for (let index = 0; index < other.length; index++) {
    for (let j = 0; j < str.length; j++) {
      if (other[index] == str[j]) {
        return true;
      }
    }
  }
  return false;
};
sizeStr = (left, right) => {
  let r = Math.random() * 100;
  while (r < left || r > right) {
    r = Math.random() * 100;
  }
  return r;
};
makingStr = (arr, str, r, rand) => {
  for (let index = 0; index < r; index++) {
    rand = Math.floor(Math.random() * arr.length);
    str += arr[rand][Math.floor(Math.random() * arr[rand].length)];
  }
  return str;
};
easyStr = () => 'abcdefghijklmnopqrstuvwxyz';
UpperStr = () => easyStr().toUpperCase();
number = () => '0123456789';
others = () => '?/>.<,;{}][|=+-_)(*&^%$#@!~`';
function easyPassword() {
  let easyPass = easyStr();
  let r = sizeStr(8, 20);
  let str = '';
  for (let index = 0; index < r; index++) {
    str += easyPass[Math.floor(Math.random() * easyPass.length)];
  }
  return str;
}
function mediumPassword() {
  let lowLetters = easyStr();
  let upperLetters = UpperStr();
  const array = [lowLetters, upperLetters];
  let r = sizeStr(10, 30);
  let str = '';
  let rand = 0;
  str = makingStr(array, str, r, rand);
  isHasC = isHasAnUpper(str);

  if (!isHasC) {
    str += array[1][Math.floor(Math.random() * array[1].length)];
  }

  return str;
}
function hardPassword() {
  let lowLetters = easyStr();
  let upperLetters = UpperStr();
  let nums = number();
  const array = [lowLetters, upperLetters, nums];
  let r = sizeStr(12, 40);
  let str = '';
  let rand = 0;
  str = makingStr(array, str, r, rand);
  let hasACap = isHasAnUpper(str);
  let haslow = isHasALower(str);
  let hasNum = isHasANumber(str);
  if (!hasACap) {
    str += array[1][Math.floor(Math.random() * array[1].length)];
  }
  if (!hasNum) {
    str += array[2][Math.floor(Math.random() * array[2].length)];
  }
  if (!haslow) {
    str += array[0][Math.floor(Math.random() * array[0].length)];
  }
  return str;
}
function ultimatePassword() {
  let lowLetters = easyStr();
  let upperLetters = UpperStr();
  let nums = number();
  let oth = others();
  const array = [lowLetters, upperLetters, nums, oth];
  let r = sizeStr(15, 45);
  let str = '';
  let rand = 0;
  str = makingStr(array, str, r, rand);
  let hasACap = isHasAnUpper(str);
  let haslow = isHasALower(str);
  let hasNum = isHasANumber(str);
  let hasOther = isHasAnOthers(str, oth);
  if (!hasACap) {
    str += array[1][Math.floor(Math.random() * array[1].length)];
  }
  if (!hasNum) {
    str += array[2][Math.floor(Math.random() * array[2].length)];
  }
  if (!haslow) {
    str += array[0][Math.floor(Math.random() * array[0].length)];
  }
  if (!hasOther) {
    str += array[3][Math.floor(Math.random() * array[3].length)];
  }
  return str;
}

easyPasswordButton = () => {
  return (document.getElementById('text').value = easyPassword());
};
mediumPasswordButton = () => {
  return (document.getElementById('text').value = mediumPassword());
};
hardPasswordButton = () => {
  return (document.getElementById('text').value = hardPassword());
};
ultimatePasswordButton = () => {
  return (document.getElementById('text').value = ultimatePassword());
};
