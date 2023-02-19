const fs = require("fs")

//1. No blocking IO model / asynchronous

// fs.writeFile("file3.txt","data is added to file",()=>{
//     console.log("data is added");
// })
// console.log("i am after asynchronous")


// 2. Synchronous 

// const b = fs.writeFileSync("file2.txt", "data entered")
// console.log(b)
// console.log("data entered")
// console.log(b )


// 3. Reading Data

//  fs.readFile("file.txt","utf-8", (err,data)=>{
//     console.log(err)
//     console.log(data)
// })
// fs.appendFile("file.txt" , " ! This data is appended " ,(err)=>{
//     console.log(err)


// 4. Renaming a file

// fs.rename("jspider.txt","file.txt",(err)=>{
//     console.log(err)
// })


// 5. Deleting a file

// fs.unlinkSync("file2.txt")