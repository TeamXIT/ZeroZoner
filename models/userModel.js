const mongoose = require('mongoose');
const userRoleEnum =require('../helpers/userRole')
const userSchema= new mongoose.Schema({
    userName:{
        type:String,    //datatype
        required:false,  //manditory
        trim:true,    //white spaces remove
        minlength: 6,
        maxlength:18,
        match: /^[a-zA-Z0-9_]+$/,
    },
    email:{
        type:String,    //datatype
        required:false,  //manditory
        trim:true,    //white spaces remove
        lowercase:true,
    },
    phone:{
        type:String,    //datatype
        required:true,  //manditory
        unique:true,
    },
    address:{
        type:String,    //datatype
        required:false,  //manditory
        default:'not provided'
    },
    location:String,
    roles:{
        type:String,
        enum:userRoleEnum,
        default: 'user'
    }
},{versionKey:false});

const User=mongoose.model("users",userSchema);

module.exports=User;

