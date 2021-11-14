//-----------------ex.1-------------------------------------
import fs from "fs";
export const promisify = (aFunc) => {
  return (...args) => {
    return new Promise((res, rej) => {
      aFunc(...args, (err, data) => {
        if (err) {
          rej(err);
        }
        res(data);
      });
    });
  };
};

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
readFile("./test.txt", "utf-8")
  .then((content) => content + " more data")
  .then((data) => writeFile("./result.txt", data))
  .then(() => console.log("Operation completed!"))
  .catch((error) => console.error(error));
