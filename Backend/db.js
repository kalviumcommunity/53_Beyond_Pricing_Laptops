const mongoose = require('mongoose')
require('dotenv').config();
const db = process.env.database

const startDb= async () =>{
    try{
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connection successful to Database");
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