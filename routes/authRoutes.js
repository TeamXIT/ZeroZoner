const express = require('express');
const {sendOTP} = require('../controllers/authController');
const router = express.Router();

router.post("/sendOTP",sendOTP);

module.exports= router;