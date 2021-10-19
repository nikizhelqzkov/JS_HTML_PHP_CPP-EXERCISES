let a = [1, 2, 3];
let b = [1, 2, 3, [1, 35, 6], [1, 4, [5, 6]]];

let c = a;
c[854] = "a";
console.log(b.flat(Infinity));
let obj = {};
obj["hrana"] = 69;
console.log(obj);
let obj2 = { ...obj, koza: 59 };
console.log(obj2);
Object.entries(obj2).forEach((element) => {
  const [key, value] = element;
  console.log(`Key: ${key} ; Value ${value}`);
});
let newArr = new Array(56).fill(undefined);
console.log(newArr);
function createObject() {
  var obj = {};
  Object.defineProperty(obj, "test", {
    // configurable?: boolean;
    // enumerable?: boolean;
    // value?: any;
    // writable?: boolean;
    get: function () {
      return 1000;
    },
    set: function (newValue) {
      console.log(newValue);
    },
  });
  return obj;
}
const objNew = createObject();
objNew["test"] = "pishka";

var oPrototype = {
  getData: function () {
    return 100;
  },
};

// create a new object that has __proto__ ref to the given object as first arg
// and configure the properties a and b.
var o = Object.create(oPrototype, {
  a: {
    value: 999,
    writable: true,
  },
  b: {
    configurable: false,
    writable: true,
    value: function () {
      console.log("Hello world!");
    },
  },
});
let objIDK = o;
console.log(o.a);

function Persone(namee, agee) {
  this.namee = namee;
  this.agee = agee;
}
Persone.prototype.koza = +"16";
console.log(new Persone("peedaaal", 16));

Persone.prototype.getData = function (arg1, arg2, arg3) {
  console.log(arg1, arg2);
  if (arg3) {
    console.log(arg3);
  }
  // this - variable that exists in every function and we
  // can set it by using bind, call, apply
  // or we call the function from an object ( obj.fn() )
  return "name: " + this.name + " age: " + this.age;
};

var fn = Persone.prototype.getData;

var objT = {
  name: "test",
};
objT.fn = Persone.prototype.getData;

console.log(objT.fn(1, 2, 3));
console.log("frgebg");
var string = fn.call(
  // calls the fn with:
  { name: "TEST", age: 22222 }, // sets the fn THIS variable
  1, // sets the first arg of the fn
  2 // sets the second arg of the fn
);
console.log(string);

var boundFn = fn.bind(
  // creates a NEW bound fn with:
  { name: "TEST", age: 22222 }, // sets the fn THIS variable
  1 // sets the first arg of the fn
  // sets the second arg of the fn
);
console.log("4t35y6h");
console.log(boundFn(15, 55, 66));

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.test = function () {
  console.log("test");
};

function Admin(name, age) {
  // (1)! similar to "super()"
  User.call(this, name, age);
  this.type = "ADMIN!";
}

// (2)!! similar to "extends"
Admin.prototype = Object.create(User.prototype);
Admin.prototype.adminTest = function () {
    console.log('admin test');
  };
