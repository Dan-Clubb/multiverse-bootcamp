const { readFile } = require("fs/promises");
console.log(readFile("./animal.txt"));
// promise pending