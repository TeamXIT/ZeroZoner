const express=require('express');
const Project=require('../models/project');
const moment=require('moment')
const {MongoClient,ObjectId}=require('mongodb');
const createAsync=async (req,res)=>{
    try {
      
  
        const { companyName, projectName, url, about,worth ,email} = req.body;
 
        
        const presentationBuffer = req.files['presentation'][0].buffer;
        const pitchDeckBuffer = req.files['pitchDeck'][0].buffer;
        const reportBuffer = req.files['report'][0].buffer;
        console.log(presentationBuffer);
       // console.log(companyName,projectName,url,about,worth,email,pitchDeckBuffer,presentationBuffer,reportBuffer)
   // Create a new instance of the Project model
    const newProject = new Project({
      companyName:companyName,
      projectName:projectName,
      url:url,
      about:about,
      worth:worth,
      presentation:presentationBuffer,
      pitchDeck:pitchDeckBuffer,
      report:reportBuffer,
      email:email
    });

    // Save the project to the database
    await newProject.save();
        res.status(200).json("Project created successfully !!!");
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getAllAsync = async (req, res) => {
    try {
        const recLimit=req.params.limit || 10;
        const pageNUmber=req.params.page || 1;
       let query={};
       if(req.params.search)
       {
          const searchRegEx=new RegExp(req.params.search,'i');
          query = {
            $or:[
              {
                projectName:{ $regex:searchRegEx}
              }
            ]
          }
       }
        
       let count= await Project.countDocuments();

       let totalPages=Math.ceil(count/recLimit);


       let projectsList= await Project.find(query).skip((pageNUmber -1) * recLimit).limit(recLimit).lean();
       /*lean() converts mongoDb collection into json format*/
       const formattedProjects = projectsList.map(({ createdAt, updatedAt, ...project }) => ({
        ...project,
        createdAt: moment(createdAt).format("MMM Do YY"),
        updatedAt: moment(updatedAt).format("MMM Do YY"),
      }));
       res.status(200).json({totalPages:totalPages,totalCount:count,items:formattedProjects});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getAsync = async (req, res) => {
    try {
      let projectId=new ObjectId(req.params.id);
      const project = await Project.findById({_id:projectId});
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
const deleteAsync = async (req, res) => {
    try {
      const projectId= new ObjectId(req.params.id);
      const project = await Project.findByIdAndDelete({_id:projectId});
      if (project==null) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      res.status(200).json({message:"Project successfully deleted"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  const updateAsync = async (req, res) => {
    try {
      const projectId = new ObjectId(req.params.id);
      const { companyName,projectName,url,about,worth,email, } = req.body;
      const presentationBuffer = req.files['presentation'][0].buffer;
      const pitchDeckBuffer = req.files['pitchDeck'][0].buffer;
      const reportBuffer = req.files['report'][0].buffer;
      console.log(presentationBuffer);
      const updatedProject = await Project.findByIdAndUpdate({_id:projectId}, { companyName,
        projectName,
        url,
        about,
        worth,
        pitchDeck:pitchDeckBuffer,
        presentation:presentationBuffer,
        report:reportBuffer,
        email }, { new: true });
      if (!updatedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports= {createAsync,getAllAsync,getAsync,deleteAsync,updateAsync};

  

