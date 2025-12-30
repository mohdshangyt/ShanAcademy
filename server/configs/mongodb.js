import mongoose, { mongo } from "mongoose";
//connect to the MongoDb database
const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=> console.log('Database connected'))
    await mongoose.connect(`${process.env.MONGODB_URI}/ShanAcademy`)

}
export default connectDB