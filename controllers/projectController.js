const User = require('../models/userModel');
const {PROJECT_CREATED} = require('../helpers/constants');

const createAsync = async (req, res) => {
    try {
       
        res.status(200).json(PROJECT_CREATED);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllAsync = async (req, res) => {
    try {
        res.status(200).json(PROJECT_CREATED);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const getAsync = async (req, res) => {
    try {
     
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  
const deleteAsync = async (req, res) => {
    try {
    
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



  const updateAsync = async (req, res) => {
    try {
     
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports= {createAsync,getAllAsync,getAsync,deleteAsync,updateAsync};