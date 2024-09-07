import mongoose from "mongoose";


export const dbConnection=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Database Connected Successfully")
    }
    catch(err)
    {
        console.log("Error While connectiong to db",err)
    }
}

