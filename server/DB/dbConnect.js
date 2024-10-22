import mongoose from "mongoose";

const dbConnect = async (url) => {
  await mongoose
    .connect(url, {})
    .then((data) => console.log("connected to ", data.connection.host))
    .catch((err) => console.log("connection failed", err.message));
};

export default dbConnect;
