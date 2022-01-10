const stream = require("stream");
const fs = require("fs");
class RevisionStream extends stream.Transform {
  constructor(options) {
    super(options);
  }
  oldChunk = "";

  _transform(chunk, encoding, next) {
    chunk = this.oldChunk + chunk;
    const newChunk = this.changeChunk(chunk);
    console.log(`The chunk: ${chunk}; newChunk: ${newChunk}`);
    this.push(newChunk);
    next();
  }
  changeChunk(chunk) {
    const newChunk = chunk.replace(/(Lorem|Ipsum)/g, "-----");
    this.oldChunk = newChunk?.split(/\s+/).slice(-1)[0];
    return newChunk.slice(0, newChunk.length - this.oldChunk.length);
  }
}

const readStream = fs.createReadStream("./test.txt", { highWaterMark: 10 });
const writeStream = fs.createWriteStream("./revision.txt");
const re = new RevisionStream();

readStream.pipe(re).pipe(writeStream);
