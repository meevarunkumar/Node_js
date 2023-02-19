const express = require("express")
const app= express()

// const path= require("path")
// const pathdir= path.join(__dirname,'public')
// app.use(express.static(pathdir))
const router= require("./router") // importing router
console.log(router);
app.use(router) // Informo=ing express that we are using router 

app.set("veiw engine", "ejs") // setting the temporal enigne
//  console.log(app.get("view engine"))
//  console.log(path.join(__dirname),"views");


app.listen(3000,()=>{
    console.log("server Started")
})