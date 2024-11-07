import express from "express";
import { loginController, signUpController } from "../controllers/authController.js";
import { validateLogin, validateSignUp } from "../middleWares/expressValidator.js";
export const authRoutes = express.Router();

authRoutes.post("/signUp",validateSignUp, signUpController);
authRoutes.post("/login",validateLogin, loginController)