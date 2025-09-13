import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config()

const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(() => {
            console.log(`Server is running on ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed: ", err);
    })