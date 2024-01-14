// Path is Module in node.js


const path = require("path");
const { PassThrough } = require("stream");

// console.log(path);

// console.log(path.sep); // \

// console.log(process.env.path) // that retrun process that seperate by (;)

// console.log(path.delimiter);

console.log(">> File Name",__filename); //C:\PW Skills Revision\Node\BackEnd\Path\path.js

console.log(">> Dir Name",__dirname); // C:\PW Skills Revision\Node\BackEnd\Path

const curentFileName = __filename

console.log("Base Name >> ",path.basename(curentFileName));

console.log("Ext Name >> ",path.extname(curentFileName));

console.log(path.basename(__filename ,".js"));





console.log(path.format({
    dir : "C:\PW Skills Revision\\Node\\BackEnd\\Path",
    base : "index.js"
}));

console.log(path.parse(curentFileName));

console.log(path.isAbsolute(curentFileName));

console.log(path.isAbsolute("..\\jsfile\\index.js"));

console.log(path.normalize("C:\PW Skills Revision\Node\\\BackEnd\\\Path"));

console.log(path.join("C:\\" ,"PW Skills Revision","Node","path.js"));








