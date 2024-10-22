import express from "express";
import { signUpController } from "../controllers/authController.js";
export const authRoutes = express.Router();

authRoutes.post("/signUp", signUpController);
