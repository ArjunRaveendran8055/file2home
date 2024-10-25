import express from "express";
import { signUpController } from "../controllers/authController.js";
import { validateSignUp } from "../middleWares/expressValidator.js";
export const authRoutes = express.Router();

authRoutes.post("/signUp",validateSignUp, signUpController);
