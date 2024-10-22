import mongoose from "mongoose"
import asyncWrapper from "../helpers/asyncWrapper.js"

export const signUpController = asyncWrapper((req, res) => {
  res.status(200).json({data:"equity",msg:"hai darling"})
});

