var express= require('express')
const app = express()
const port = 3120
app.get('/ping',(req,res)=>{
    res.send("pong")
})
app.listen(port,()=>{
    console.log("port running in 3120...");
})