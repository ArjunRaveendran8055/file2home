import AppError from "../AppError.js";

const errorHandler = (error, req, res, next) => {
  console.log(`erroHandler : ${error.message}`);
  if (error instanceof AppError)
    return res
      .status(error.statusCode)
      .json({ error: error.message, success: false });

  return res
    .status(500)
    .json({ error: "Internal server Error", success: false });
};

export default errorHandler;
