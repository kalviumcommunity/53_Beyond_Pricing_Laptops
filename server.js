var express= require('express')
var app = express()
var port = 3120
app.get('/ping',(req,res)=>{
    res.send("pong")
})
app.listen(port,()=>{
    console.log("port running in 3120...");
})