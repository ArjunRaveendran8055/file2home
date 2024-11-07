import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"username is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    address:{
        type:String,
        required:false
    },
    image:{
        type:String,
        required:false
    },
    role:{
        type:String,
        default:"user"
    },
    resetPassword:{
        type:Object,
        required:false
    }
})

export const UserModel=mongoose.model("users",userSchema)