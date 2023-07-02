import express from "express"
import {InsertWard, ViewWards, addToWard,getWardByName} from "../controllers/wardCRUD.js"


const router = express.Router()

router.post("/", addToWard)

router.get("/", ViewWards)



export default router