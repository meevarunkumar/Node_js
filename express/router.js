const express = require("express")
const router=express.Router()


router.get("/",(req,res)=>{
    // res.sendFile(`${pathdir}/index.html`)
    res.render("index",{
        title:"index"
    })
})

router.get("/about",(req,res)=>{
    res.render("about",{
        title:"about"
    })
})
router.get("/download",(req,res)=>{
    res.render("download",{
        title:"download"
    })
})

module.exports=router;
