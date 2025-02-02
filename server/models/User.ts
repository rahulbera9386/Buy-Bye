import mongoose from "mongoose";


const UserSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true
    },
    role:{
        type:String,
        default:"user"
    }
});


const User=mongoose.model("User",UserSchema);

export default User;