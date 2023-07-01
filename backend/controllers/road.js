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


// @desc Get damaged road
// @route GET /api/road
// @access public

export const getAllRoads=async(req,res,next)=>{
    try{
       const allRoads=await Road.find()
       res.status(200).json(allRoads)
    }
    catch(err){
        next(err)
    }
}

// @desc delete damaged road
// @route DELETE /api/road
// @access private

export const deleteRoad=async(req,res,next)=>{
    try{
         await Road.findByIdAndDelete(req.params.id)
         res.status(200).json("Road has been deleted")
    }
    catch(err){
        next(err)
    }
}