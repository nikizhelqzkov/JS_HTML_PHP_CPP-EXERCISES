import User from "./user.js";
import { printName, printAge } from "./user.js";
const user = new User("Niki", 20);
console.log(user);
printName(user);
printAge(user);
