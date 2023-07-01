import express from "express"
import { createRoad ,getAllRoads} from "../controllers/road.js"

const router=express.Router()


// CREATE
router.post("/",createRoad)
router.get("/",getAllRoads)

export default router