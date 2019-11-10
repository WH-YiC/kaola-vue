const express = require("express");
const router = express.Router();
// const shopsModel = require("../module/model01");
// const classify =require("../module/model02");
// const personalNews =require("../module/model04");
const data = require("../module/module1")
//允许跨域设置

router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Headers","Content-Type");
    if(req.method=="OPTIONS")  res.send(200); /*让option请求快速返回*/
    else next();
});

router.get("/",(req,res)=>{
    res.json(data.getData())
    //{orders:orderarr}  绑定到order.ejs模板上
})


module.exports = router;
