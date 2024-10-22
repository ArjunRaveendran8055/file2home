const mongoose = require("mongoose");
const { asyncWrapper } = require("../helpers/asyncWrapper");

const signUpController = asyncWrapper((req, res) => {
  res.status(200).json({data:"equity",msg:"hai darling"})
});

module.exports = {
  signUpController,
};
