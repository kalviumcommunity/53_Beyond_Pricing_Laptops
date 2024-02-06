var express = require('express')
var app = express()
var {startServer,closeServer} = require('./server')
var {isConnected} = require('./db')
const router = express.Router()
var port =3350;
const Products = require('./schema')
const bodyParser = require('body-parser')//it is used to to collect any type of data and convert them in a readable json file
app.use(bodyParser.json()) // converts the all recieved data in json form
app.use(express.json())


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
router.get('/api/Laptops', async(req,res)=>{
    try {
        const AllLaptopsData = await Products.find()
        res.json({Product:AllLaptopsData})
    } catch (error) {
        
    }
})
router.post('/Laptops', async(req,res)=>{
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
router.patch('/Laptops/:id', async(req,res)=>{
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

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

module.exports=router;
