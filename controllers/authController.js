const User = require('../models/userModel');
const {generateOTP,verifyOTP} = require('../helpers/otpGeneration');
const jwt=require('jsonwebtoken');
require("dotenv");

const sendMessage = require('../helpers/twilio');

const sendOTP = async (req, res) => {
    try {
      const { phone } = req.body;
      const _user = await User.findOne({phone: phone});
      if (!_user) {
        let {otp}=await generateOTP(phone,8,600);
        //await sendMessage(`your login otp ${_otp}`,phone);
        return res.status(200).json({ message: 'SMS OTP Successfyll Sent:'+otp });
      }
      else{
        let {otp}=await generateOTP(phone,8,600);
        //await sendMessage(`your login otp ${_otp}`,_user.phone);
        return res.status(200).json({ message: 'SMS OTP Successfyll Sent:'+otp });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};


const loginWithOTP = async (req, res) => {
  try {
    const { phone, account_type,otp } = req.body;
    const _user = await User.findOne({phone: phone});
    if (!_user) {
      let {success,message}=await verifyOTP(phone,otp);
      if(success)
      {
        let newUser=new User({phone: phone, roles: account_type});
        await newUser.save();
        let _secret=process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({ userId: newUser._id ,role:newUser.roles,phone:newUser.phone,permissions: "user_permissions" }, _secret , { expiresIn: '1h' });
        return res.status(200).json({ message: 'user successfully created',access_token:token});
      }
      else
      {
        return res.status(200).json({ message: message});
      }
    }
    else{
      let {success,message}=await verifyOTP(phone,otp);
      if(success)
      {
        let _secret=process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({ userId: _user._id ,role:_user.roles,phone:_user.phone,permissions: "user_permissions"  }, _secret , { expiresIn: '1h' });
        return res.status(200).json({ message: message,access_token:token});
      }
      else
      {
        return res.status(200).json({ message: message});
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  module.exports={sendOTP,loginWithOTP}
  