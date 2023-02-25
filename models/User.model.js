const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    image:String,
    name:String,
    bio:String,
    phone:Number,
    email:String,
    password:String
})

const UserModel=mongoose.model("user",UserSchema)

module.exports={
    UserModel
}