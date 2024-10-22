const AppError=require("../AppError")

const errorHandler = (error, req, res, next) => {
  console.log(error.message);
  if (error instanceof AppError)
    return res
      .status(error.statusCode)
      .json({ error: error.message, success: false });

  return res
    .status(500)
    .json({ error: "Internal server Error", success: false });
}


module.exports={
  errorHandler
}
