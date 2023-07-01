import mongoose from "mongoose"


const WardSchema = new Mongoose.Schema({
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