const path = require("path");

// returns the path seperator
console.log(path.sep);

// gets the filepath
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// outputs the base of the file path
const base = path.basename(filePath);
console.log(base);

// gives the absolute path to the file
// accepts a sequence then combines it into one path
// dirname gives path all the way up to the folder
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
