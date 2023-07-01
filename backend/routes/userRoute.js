import express from "express"
import { register,login } from "../controllers/userauth.js"

const router=express.Router()


// CREATE
router.post("/register",register)
router.post("/login",login)

export default router