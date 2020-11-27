import { visualizeNew, visualizeNew2 } from "./importer.js";

visualizeNew([9, 7, 7, 8, 5, 845, 5, 5]);
visualizeNew2([9, 7, 7, 8, 5, 845, 5, 5]);

const mapper = new Map([
  ["Kon", "golqm"],
  [0, "start"],
  [1, "end"],
]);
console.log(mapper.get("Kon"));
mapper.set("Magare", "Prosto");
console.log(mapper.entries());
for (const iterator of mapper) {
  console.log(iterator.entries().next());
}
console.log('===============\n');

mapper.forEach((element) => console.log(element));
