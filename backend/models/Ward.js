import mongoose from "mongoose"


const WardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    road: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'roads'
    }
    ],
})

export default mongoose.model("Ward",WardSchema)