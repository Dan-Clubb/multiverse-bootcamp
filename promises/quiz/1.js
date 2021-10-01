const { readFile } = require("fs/promises");

readFile("./animal.txt", { encoding: "utf-8" }).then(console.log);
// error
// wrong it will console log fox