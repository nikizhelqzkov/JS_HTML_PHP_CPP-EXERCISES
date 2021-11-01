import fs from "fs";
// console.log(fs);

// fs.writeFile("./test.txt", "helloWorld", function (err) {
//   if (err) {
//     console.log(err);
//   }
// });
// fs.readFile("./test.txt", (err, data) => {
//   console.log(data + "");
// });
function readingFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}
function writingFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}
function modify(data) {
  return data + " 4531; ";
}
function logMessage(message, data) {
  console.log(message + data);
}
function curry(fn) {
  return function helper() {
    var arity = fn.length;
    var args = [].slice.call(arguments);
    if (args.length === arity) {
      return fn.apply(undefined, args);
    }
    return function () {
      var allArgs = args.concat([].slice.call(arguments));
      return helper.apply(undefined, allArgs);
    };
  };
}
var cWriteFile = curry(writingFile);
var cLogMessage = curry(logMessage);

readingFile("./test.txt")
  .then(modify)
  .then(cWriteFile("./text2.txt"))
  .then(cLogMessage("The new text is: "))
  .catch((error) => {
    console.error(error);
  });
