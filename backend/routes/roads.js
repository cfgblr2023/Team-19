import express from "express"
import { createRoad ,deleteRoad,getAllRoads} from "../controllers/road.js"

const router=express.Router()


// CREATE
router.post("/",createRoad)

// GET
router.get("/",getAllRoads)

// DELETE
router.delete("/:id",deleteRoad)

export default router