const mongoose = require('mongoose')
const db = "mongodb+srv://Himanshu:MongoDB@cluster0.srld35z.mongodb.net/Laptops Data"

const startDb= async () =>{
    try{
        await mongoose.connect(db)
        console.log("connection successful");
    }catch(err){
        console.log("connection Error");
    }
}

const closeDb =  async () =>{
    try{
        await mongoose.connection.close()
        console.log("successful disconnected");
    }catch(err){
        console.log("disconnection Error");
    }
}

const isConnected = ()=>{
    return mongoose.connection.readyState===1;
}

module.exports = {startDb,closeDb,isConnected}