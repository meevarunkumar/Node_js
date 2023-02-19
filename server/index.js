
const http = require('http');
const fs= require("fs");

const server = http.createServer((req, res) => {
    const jsonDAta=fs.readFileSync("api.json", "utf-8")
    const objectData = JSON.parse(jsonDAta)

    // console.log(req.url);
    if(req.url==="/"){
        res.end("Welcome to home page")
    }
    else if(req.url==="/download"){
        res.end("this is our download page")
    }
    else if(req.url==="/about"){
        res.end(objectData[0].name)
    }
});

server.listen(3000, () => {
  console.log("Server running at local host 3000");
});