import mongoose, { Mongoose } from "mongoose"


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