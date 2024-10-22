import app from "./app.js"
import dbConnect from "../server/DB/dbConnect.js"

process.on("uncaughtException",(err)=>{
  console.log(`server shutting down due to uncaught exception ${err.message}`)
  process.exit(0)
})

process.on("unhandledRejection",(err)=>{
  console.log(`server shutting downDue to unhandled rejection ${err.message}`)
})

const startServer = async () => {
  const url = process.env.DB_URL;
  await dbConnect(url).then(() => {
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log("connected to server: ", port);
    });
  })
  .catch((err)=>{
    console.log("db connection failed",err.message)
  })
};
startServer();
