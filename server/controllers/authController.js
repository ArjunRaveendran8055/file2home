import mongoose from "mongoose";
import asyncWrapper from "../helpers/asyncWrapper.js";
import { body, validationResult } from "express-validator";
import AppError from "../AppError.js";

//signUpController
export const signUpController = asyncWrapper((req, res) => {
  const errors = validationResult(req);
  const extractedErrors = errors.array().map((err) => err.msg);
  // console.log("extracted errors are", extractedErrors);
  if (!errors.isEmpty()) {
    throw new AppError(400, `${extractedErrors.join(", ")}`);
  }
  const { userData } = req.body;
  
  

});
