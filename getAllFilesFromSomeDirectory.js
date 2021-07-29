const folderToReadPath = process.argv.slice(2);
const fs = require("fs");
console.log(folderToReadPath);
fs.readdirSync(folderToReadPath).forEach((file) => {
  console.log(file);
});

