import express from "express"
import { createRoad } from "../controllers/road.js"

const router=express.Router()


// CREATE
router.post("/",createRoad)

export default router