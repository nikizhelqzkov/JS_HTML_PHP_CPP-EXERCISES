const http = require("http");
const fs = require("fs");
const path = require("path");
// const pathAddr = path.resolve(__dirname, "index.js");
// console.log(pathAddr);
// const reader = fs.createReadStream(pathAddr);
// reader.pipe();
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
    res.writeHead(200,'Works');
    console.log('test');
});
server.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
