import express from "express"
import {InsertWard, ViewWards, addToWard,getWardByName} from "../controllers/wardCRUD.js"


const router = express.Router()

router.post("/", addToWard)

router.get("/", getWardByName)



export default router