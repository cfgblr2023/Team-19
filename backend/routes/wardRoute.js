import express from "express"
import {InsertWard, ViewWards} from "../controllers/wardCRUD.js"


const router = express.Router()

router.post("/", InsertWard)

router.get("/", ViewWards)

export default router