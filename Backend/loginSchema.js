const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// Middleware (password hashing)

loginSchema.pre('save', async function(next){
    //this will give all the data
    const user = this
    if(!user.isModified("password")){
        next()
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltRound)
        user.password=hash_password
    } catch (error) {
        next(error)
    }
})

// checking password

loginSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password)
}

//json web token

loginSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email
        },
        process.env.JWT_SECURE_KEY, 
        {
            expiresIn: "30d"
        }
        )
    } catch (error) {
        console.error(error)
    }
}


const LoginData = mongoose.model("Loggers",loginSchema)

module.exports=LoginData