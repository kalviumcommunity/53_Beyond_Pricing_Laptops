const mongoose = require('mongoose')
const LaptopDataSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    RAM_GB:{
        type:Number,
        required:true
    },
    ROM_GB:{
        type:Number,
        required:true
    },
    RAM_Type:{
        type:String,
        required:true
    },
    ROM_Type:{
        type:String,
        required:true
    },
    Battery_hrs:{
        type:Number,
        required:true
    },
    Operating_System:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Review:{
        type:String,
    },
    username:{
        type:String,
    }
})

const Products = mongoose.model('products', LaptopDataSchema); // Use the correct collection name
module.exports =  Products ;