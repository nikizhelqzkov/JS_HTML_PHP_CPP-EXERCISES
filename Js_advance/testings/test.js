const obj = {
  key: 5,
  value: "koza",
  mozuk: 69,
  voda: "hkre",
  obj3: {
    gkf: 5,
  },
};

const { key, mozuk, ...other } = obj;

let arr = [1, 2, 3, 5, 56, 6];
const [a, b, ...c] = arr;
console.log(other);

const obj2 = { ...obj };
obj2.lq = "ef";
