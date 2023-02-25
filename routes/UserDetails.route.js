const express=require("express")
const bcrypt=require("bcrypt")
const { UserModel } = require("../models/User.model")


const userDetailsRouter=express.Router()

userDetailsRouter.get("/",async(req,res)=>{
    let id=req.body.userID
    try{
        const user= await UserModel.findOne({"_id":id})
        res.send(user)
    }catch(err){
        console.log(err)
        console.log("Something went wrong")
    }
})

module.exports={
    userDetailsRouter
}