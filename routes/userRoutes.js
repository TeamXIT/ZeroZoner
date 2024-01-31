const express = require('express');
const authenticateToken=require('../middlewares/jwt');
const verifyUserRole=require('../middlewares/userRoleVerifier');
const userRoleEnum= require('../helpers/userRole')

const {createAsync, getAllAsync,getAsync,deleteAsync,updateAsync} = require('../controllers/userController');
const router = express.Router();

router.post("/create",authenticateToken,verifyUserRole(userRoleEnum[0]),createAsync);
router.get('/getAll',authenticateToken,getAllAsync);
router.get('/get/:id',authenticateToken,getAsync);
router.delete("/delete/:id",authenticateToken,deleteAsync);
router.put('/update',authenticateToken,updateAsync);

module.exports= router;