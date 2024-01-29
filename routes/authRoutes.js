const express = require('express');
const {sendOTP, loginWithOTP} = require('../controllers/authController');
const router = express.Router();

router.post("/sendOTP",sendOTP);
router.post('/verifyOTP',loginWithOTP);

module.exports= router;