import Ward from "../models/Ward.js"

export const InsertWard = async(req, res)=>{
    const w = await Ward.create(req.body)
    res.status(201).json({
        success: true
    })
    console.log(w)
}

export const ViewWards = async(req, res)=>{
    const w = await Ward.find()
    console.log(w)
    // res.render("", {w})
    res.status(200).json({
        success: true
    })
}