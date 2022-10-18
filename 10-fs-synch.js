// fs allows you to work with files

const { readFileSync, writeFileSync, write } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// method call that takes two paremeters: the path, then the output
// flag is a third paremeter that can be taken and a represents append
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting with this next one");

// if file does not exist then it will create
// if does exist it will overide
console.log(first, second);
