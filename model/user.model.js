import mongoose from "mongoose";




const userSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    first_name:{type:String,required:false,default:'Male'},
    first_name:{type:String,required:false},
})

const User=mongoose.model("user",userSchema);
export default User