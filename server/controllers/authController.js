import mongoose from "mongoose";
import asyncWrapper from "../helpers/asyncWrapper.js";
import { body, validationResult } from "express-validator";
import AppError from "../AppError.js";
import { UserModel } from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { createToken } from "../utils/jwt.js";

//signUpController
export const signUpController = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  const extractedErrors = errors.array().map((err) => err.msg);
  // console.log("extracted errors are", extractedErrors);
  if (!errors.isEmpty()) {
    throw new AppError(400, `${extractedErrors.join(", ")}`);
  }
  //fetching userdata from the request
  const { userData } = req.body;
  const result = await UserModel.findOne({ email: userData.email });
  if (result) {
    throw new AppError(400, "User already Exists");
  }
  //calling function to hash password
  const hPassword = hashPassword(userData.password);
  //create user to save to the collection
  const newUser = new UserModel({
    userName: userData.userName,
    password: hPassword,
    email: userData.email,
  });
  const userCreated = await newUser.save();
  if (!userCreated) {
    throw new AppError(400, "User Creation Failed!");
  }
  res.status(200).json({
    user: userCreated.userName,
    success: true,
    msg: "user creation successful",
  });
});

//loginController
export const loginController = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  const extractedErrors = errors.array().map((err) => err.msg);
  // console.log("extracted errors are", extractedErrors);
  if (!errors.isEmpty()) {
    throw new AppError(400, `${extractedErrors.join(", ")}`);
  }
  const { user } = req.body;
  const result = await UserModel.findOne({ email: user.email });
  if (!result) {
    throw new AppError(404, "User Not Found !");
  }
  const matchingPassword = comparePassword(user.password, result.password);
  if (!matchingPassword) {
    throw new AppError(401, "Unmatching Credentials!");
  }
  const token = createToken({
    id: result._id,
    username: result.userName,
    email: result.email,
  });
  res.status(200).json({ token, msg: "hello babe!" });
});
