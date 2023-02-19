const path = require("path")
const file=path.basename("C:\\temp\\myfile.html")
console.log(file);
const dir=path.dirname("C:\\temp\\myfile.html")
console.log(dir);
const ext= path.extname("C:\\temp\\myfile.html")
console.log(ext);