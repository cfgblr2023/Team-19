import mongoose from "mongoose"


const WardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    road: {
        type:String,
        
    }
    ,
})

export default mongoose.model("Ward",WardSchema)