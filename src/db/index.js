import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const connectDB = async() => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log(`\n MONGO DB Connected!!! DB HOST : ${connectionInstance.connection.host}`)
    } catch (err) {
        console.log("Mongo DB Connection FAILED", err)
        process.exit(1)
    }
}

export default connectDB