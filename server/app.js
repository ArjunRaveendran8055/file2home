const express = require("express");
const morgan = require("morgan");
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
// const {errorHandler}=require("")


const { authRoutes } = require("./routes/authRoutes");

//cross origin configuration
app.use(cors({
  origin:"http://localhost:5173"
}))

//auth routes
app.use("/auth",authRoutes)

//dotEnv config
require("dotenv").config({
  path: "./config/.env",
});




//errorHandler



module.exports={
    app
}