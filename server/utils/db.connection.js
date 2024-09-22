import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("database connected successfully")
    } catch (err) {
        console.log(`Error at mongodb connection: ${err}`)
    }
}
export default connectDB