import express from "express"
import { createRoad ,deleteRoad,getAllRoads, getRoad} from "../controllers/road.js"

const router=express.Router()


// CREATE
router.post("/",createRoad)

// GET
router.get("/",getAllRoads)

// DELETE
router.delete("/:id",deleteRoad)

// Get Road by Id
router.get("/:id",getRoad)

export default router