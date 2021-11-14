import fs from "fs";
import { promisify } from "./promisify.js";
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
//-------------------------------------------------ex.2-----------------

const objNumberOfLines = {
  "1.txt": 0,
  "2.txt": 0,
  "3.txt": 0,
};


const linesCount = (data) => {
  const splitetData = data.split("\n");
  const sizeOfNewLines = splitetData.length;
  return sizeOfNewLines;
};

const detectChange = (linesCount, fileName) => {
  const prevLinesCount = objNumberOfLines[fileName];
  if (prevLinesCount === 0) {
    objNumberOfLines[fileName] = linesCount;
  } else if (prevLinesCount !== linesCount) {
    console.log("Has detection");
    resetTimeout(intervalId);
    objNumberOfLines[fileName] = linesCount;
  }
};


const isChanger = () => {
  console.log("Is changer");
  const mappedPromises = Object.keys(objNumberOfLines).map((key) => {
    return readFile(key, "utf-8");
    //   .then(linesCount)
    //   .then((newLines) => detectChange(newLines, key));
  });


  Promise.all(mappedPromises).then((res) =>
    res.forEach((elem, index) => {
      const newLinesCount = linesCount(elem);
      detectChange(newLinesCount, Object.keys(objNumberOfLines)[index]);
    })
  );
};

const intervalId = setInterval(isChanger, 1000);
let clearIntervalId;


const resetTimeout = (intervalId) => {
  if (clearIntervalId !== undefined) {
    clearTimeout(clearIntervalId);
  }
  clearIntervalId = setTimeout(() => {
    clearInterval(intervalId);
  }, 10000);
};


resetTimeout(intervalId);



