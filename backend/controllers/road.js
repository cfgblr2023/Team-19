import Road from "../models/Road.js";


// CRUD for roads

// @desc Add damaged road
// @route POST /api/road
// @acess public

export const createRoad=async(req,res,next)=>{
    const newRoad=new Road(req.body)

    try{
        const savedRoad=await newRoad.save()
        res.status(200).json(savedRoad)
    }
    catch(err){
        next(err)
    }
}
