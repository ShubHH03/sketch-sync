import mongoose from "mongoose"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        // console.log("\n DB Conencted")
        console.log(`\nDB connected !! DB HOST: ${connectionInstance.connection.host}`);


    } catch (error) {
        console.log("DB Connection failed", error)
        process.exit(1)
        
    }
}

export default connectDB