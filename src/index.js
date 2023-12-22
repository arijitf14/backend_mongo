import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then((res) => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`SERVER IS RUNNING AT PORT: ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log("MONGO DB CONNECTION FAILED !!", err)
  });
