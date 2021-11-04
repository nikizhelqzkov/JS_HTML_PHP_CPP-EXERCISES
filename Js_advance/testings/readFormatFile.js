import fs from "fs";

fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
  let d = data.match(/^[^#]([A-Za-z]+(\s)*)+/gm).map((el) => {
    return el.replace("\n", "").trim();
  });
//   console.log(data);
    let d2 = data.match(/^#([0-9]+)/gm);
    // var obj = {};
    //   for (let i = 0; i < d.length; i++) {
    //     obj[d[i]] = d2[i];
    //   }
  console.log(d2);
});
//\s(([0-9]\.[0-9])($|\s))+