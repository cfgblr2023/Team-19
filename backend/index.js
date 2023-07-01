import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/userRoute.js"

import roadRoute from "./routes/roads.js"

const app =express()


dotenv.config()

const connect=async()=>{

try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")
}
catch(error){
   
    throw error
}

}

// send json data
app.use(express.json())

app.use("/api/road",roadRoute)
app.use(express.json())
app.use('/api/auth', authRoute)


// error handling middleware
app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500 
    const errorMessage=err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})




// checking if mongodb is connected
mongoose.connection.on("discconncted",()=>{
    console.log('mongodb disconnected')

})

// checking if the connection is on
mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected")
})

app.listen(8800,()=>{
    connect()
    console.log("Connected to backend.")
})