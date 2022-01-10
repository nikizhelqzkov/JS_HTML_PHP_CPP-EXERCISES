const stream = require("stream");
const fs = require("fs");
const http = require("http");
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
    const newChunk = chunk.replace(/(FMI)/g, "-----");
    this.oldChunk = newChunk?.split(/\s+/).slice(-1)[0];
    return newChunk.slice(0, newChunk.length - this.oldChunk.length);
  }
}

const server = http.createServer((res, req) => {
  http.get(
    {
      hostname: "learn.fmi.uni-sofia.bg",

      method: "get",
    },
    (response) => {
      if (response.statusCode === 200) {
        const re = new RevisionStream();
        const writeStream = fs.createWriteStream("./revision2.txt");
        response.pipe(re).pipe(writeStream);
      }
    }
  );
});
const PORT = process.env.PORT || 8080;
server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server is listening on port ${PORT}`);
});

// const readStream = fs.createReadStream("./test.txt", { highWaterMark: 10 });
// const writeStream = fs.createWriteStream("./revision.txt");
// const re = new RevisionStream();

// readStream.pipe(re).pipe(writeStream);
