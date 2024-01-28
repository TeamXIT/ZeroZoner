const User = require('../models/userModel');

const sendMessage = require('../helpers/twilio');

const sendOTP = async (req, res) => {
    try {
      const { phone, account_type } = req.body;
      const _user = await User.findOne({phone: phone});
      if (!_user) {
        let newUser=new User({phone: phone, roles: account_type});
        await newUser.save();
        let _otp=123456;
        //await sendMessage(`your login otp ${_otp}`,phone);
        return res.status(200).json({ message: 'SMS OTP Successfyll Sent:'+_otp });
      }
      else{
        let _otp=123456;
        //await sendMessage(`your login otp ${_otp}`,_user.phone);
        return res.status(200).json({ message: 'SMS OTP Successfyll Sent:'+_otp });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports={sendOTP}
  