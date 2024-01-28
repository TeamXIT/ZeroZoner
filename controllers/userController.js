const User = require('../models/userModel');

const createAsync = async (req, res) => {
    try {
        // destructing the request and then forming the user model.
        const {
            userName,
            email,
            phone,
            address,
            location
        } = req.body;

        let newUser = new User({
            userName,
            email,
            phone,
            address,
            location
        })

        await newUser.save();
        res.status(200).json("user created successfully !!!");
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllAsync = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const getAsync = async (req, res) => {
    try {
      const userId = req.params.id;
      let _userId=new ObjectId(userId);
      const user = await User.findById({_id:_userId});
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  
const deleteAsync = async (req, res) => {
    try {
      const userId = req.params.id;
      let _userId=new ObjectId(userId);
      const user = await User.findByIdAndDelete({_id:_userId});
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
      const userId = req.params.id;
      const { phone, email } = req.body;
      let _userId=new ObjectId(userId);
      const updatedUser = await User.findByIdAndUpdate({_id:_userId}, { phone, email }, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports= {createAsync,getAllAsync,getAsync,deleteAsync,updateAsync};