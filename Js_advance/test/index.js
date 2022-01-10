/*Допишете задачата
Сървърът слуша за заявки от следния вид: `load-file/<file-name>` и трябва да върне съдържанието на файла `files/<file-name>.txt`.
Ако не е подаден <file-name> или даденият файл не съществува, да се върне грешка.
*/
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const fileName = "load-file/test.txt"; //my file
  const filePath = path.resolve(__dirname, fileName);
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      res
        .writeHead(300, err)
        .end(`THE error with status code : 300  is : ${err}`);
      console.error(err);
    }
    res.writeHead(200).end(data);
    console.log("Your data is: ",data);
  });
});

server.listen(8080, () => {
  console.log("Server is listening on :8080");
  console.log("Hello my friend");
});
