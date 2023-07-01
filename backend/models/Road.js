import mongoose from "mongoose";
const RoadSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'

    },
    damageType:{
        type: String,
        required: true,
    },
    picture:{
        type:String
    },
    video:{
        type:String
    },
    longitude:{
        type:String
    },
    latitude:{
        type:String
    },
    resolved:{
        type: Boolean,
        default: false
    }

},
 {timestamps:true}
)

export default mongoose.model("Road",RoadSchema)