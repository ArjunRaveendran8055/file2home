import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
const app = express();
app.use(express.json());
app.use(morgan("dev"))


import {authRoutes} from "../server/routes/authRoutes.js"

//cross origin configuration
app.use(cors({
  origin:"http://localhost:5173"
}))

//dotEnv config
dotenv.config({
  path: "./config/.env",
});

//auth routes
app.use("/auth",authRoutes)





//errorHandler

export default app


