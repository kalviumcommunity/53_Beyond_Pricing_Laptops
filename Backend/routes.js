var express = require('express')
var app = express()
var {startServer,closeServer} = require('./server')
var {isConnected} = require('./db')
const router = express.Router()
const joi_model= require('./joi')
const Products = require('./schema')
const bodyParser = require('body-parser')//it is used to to collect any type of data and convert them in a readable json file
app.use(bodyParser.json()) // converts the all recieved data in json form
app.use(express.json())

const Joi_schema= ((req,res,next)=>{
    const { error } = joi_model.validate(req.body,{
        abortEarly:false,
    });
    if(error){
        res.status(400).send(error.details)
    }else{
        res.send("data send successfully")
        next()
    }
})

var LaptopData = [
    { id: 1, brand: 'Dell', model: 'XPS 13' },
    { id: 2, brand: 'HP', model: 'Spectre x360' },
    { id: 3, brand: 'Lenovo', model: 'ThinkPad X1 Carbon' },
]
router.get('/LaptopsData',(req,res)=>{
    res.send(LaptopData)
})
router.get('/', (req, res) => {
    res.send(`Database connection status: ${isConnected() ? "Connection successful" : "Connection Unsuccessful"}`);
});
router.get('/ping', (req, res) => {
    res.send("pong");
});
router.get('/Laptops', async(req,res)=>{
    try {
        const AllLaptopsData = await Products.find()
        res.json({Product:AllLaptopsData})
    } catch (error) {
        
    }
})
router.get('/Laptops/:id', (req,res)=>{
    const id = req.params.id
    Products.findById({_id:id})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})
router.put('/UpdateUser/:id', Joi_schema, (req,res)=>{
    const id=req.params.id
    Products.findByIdAndUpdate({_id:id}, {Name: req.body.Name, image: req.body.image, RAM_GB:req.body.RAM_GB, ROM_GB: req.body.ROM_GB, RAM_Type:req.body.RAM_Type, ROM_Type:req.body.ROM_Type, Battery_hrs:req.body.Battery_hrs, Operating_System:req.body.Operating_System, Price:req.body.Price, Review:req.body.Review})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})
router.post('/Laptops', Joi_schema, async(req,res)=>{
    try{
        const data = req.body
        const new_product_data = new Products(data);
        const response = await new_product_data.save()
        console.log("data Saved");
        res.status(200).json(response)
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server Error"})
    }
})
router.patch('/Laptops/:id', Joi_schema, async(req,res)=>{
    try{
        const ID = req.params.id
        const data = req.body
        const Updated_data = await Products.findByIdAndUpdate(ID,data,{new:true})
        const response = await Updated_data.save()
        if(!Updated_data){
            res.status(401).send("Data id not found")
        }
        res.send(Updated_data)
        // return Updated_data
    }catch(error){
        res.status(500).send(error)
    }
})
router.delete('/Laptops/:id', async(req,res)=>{
    try{
        const ID = req.params.id
        const new_data = await Products.findByIdAndDelete(ID)
        res.send(new_data)

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})
    }
})


module.exports=router;
