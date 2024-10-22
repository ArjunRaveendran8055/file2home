const express=require("express")
const { signUpController } = require("../controllers/authController")
const authRoutes=express.Router()


authRoutes.post("/signUp",signUpController)

module.exports={
    authRoutes
}