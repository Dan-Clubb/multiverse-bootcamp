const { readFile } = require("fs/promises");

async function whatever() {
    const response = await readFile("./animal.txt", { encoding: "utf-8" });
    console.log(response);
}

whatever();
// console log fox