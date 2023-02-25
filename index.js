const express=require("express")
const cors=require("cors")
const { connection } = require("./config/db")
const { userRegisterRouter } = require("./routes/UserRegister.route")
const { userLoginRouter } = require("./routes/UserLogin.route")
const { authenticate } = require("./middlewares/authenticate.middleware")
const { userDetailsRouter } = require("./routes/UserDetails.route")
require("dotenv").config()


const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome")
})
app.use("/register",userRegisterRouter)
app.use("/login",userLoginRouter)

app.use(authenticate)
app.use("/getProfile",userDetailsRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }catch(err){
        console.log(err)
        console.log("Error while connecting to DB")
    }
    console.log(`Server running at ${process.env.port} `)
})