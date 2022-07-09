const fs = require("fs");
let text = fs.readFileSync("node.txt","utf-8");
//text = text.replace("Bushra","Bushra Ansari");
//console.log("The content of the file is");
console.log(text);

//console.log("Creating a new file...");
//fs.writeFileSync("Bushra.txt",text);