const mongoose = require('mongoose');
const User = require('../models/userModel');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/zeroZoner', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
      }
};


module.exports={ connectDB, User};