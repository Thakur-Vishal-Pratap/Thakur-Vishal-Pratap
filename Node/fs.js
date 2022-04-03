// fs -> file system module
const fs = require("fs");
// const abc = require("../Practice/temp");
// console.log(abc);

let res = fs.appendFileSync("f1.txt" , "Hello, i am F1 file");
console.log(res);

let data = fs.readFileSync("f1.txt");
console.log(data+"" );