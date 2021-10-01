const { readFile } = require("fs/promises");

async function readAndPrint() {
    const response = await readFile("./animal.txt", { encoding: "utf-8" });
    console.log(response);
}

console.log("hello");
readAndPrint();
console.log("goodbye");
// hello fox goodbye
// wrong hello goodbye fox