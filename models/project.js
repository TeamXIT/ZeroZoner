const mongoose = require('mongoose');
const projectSchema= new mongoose.Schema({
    name:{
        type:String,    //datatype
        required:true,  //manditory
    }
},{versionKey:false});

const Project=mongoose.model("projects",projectSchema);

module.exports=Project;

