const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  companyName: {
    type: String,
    unique:false,
    required: false
  },
  projectName: {
    type: String,
    unique:true,
    required: true
  },
  url:{
    type:String,
    unique:false,
    required: false
  },
  about: {
    type: String,
    required: true
  },
  worth:{
    type: Number,
    required: true

  },
  pitchDeck: {
    type: Buffer,
  },
  presentation: {
    type: Buffer,
    
  },
  report: {
    type: Buffer,
   
  },
  email:{
    type:String,
    trim:true,
    unique:false,
    lowercase:true
  }
 
},{versionKey:false,timestamps:true});

const Project = mongoose.model('Projects', projectSchema);

module.exports = Project;