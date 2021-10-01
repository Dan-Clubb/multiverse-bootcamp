const { readFile } = require("fs/promises");

console.log("hello");
readFile("./animal.txt", { encoding: "utf-8" }).then(console.log);
console.log("goodbye");
// hello goodbye fox