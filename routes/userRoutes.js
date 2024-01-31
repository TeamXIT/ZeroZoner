const express = require('express');
const {verifyJWT}=require('../middlewares/jwt');
const verifyUserRole=require('../middlewares/userRoleVerifier');
const userRoleEnum= require('../helpers/userRole');
const checkPermission=require('../middlewares/checkPermission');
const permissionsEnum=require('../helpers/permissions');


const {createAsync, getAllAsync,getAsync,deleteAsync,updateAsync} = require('../controllers/userController');
const router = express.Router();

//router.post("/create",authenticateToken,verifyUserRole(userRoleEnum[0]),checkPermission(permissionsEnum.ENTREPRENEUR),createAsync);
router.post("/create",createAsync);
router.get('/getAll',verifyJWT,getAllAsync);
router.get('/get/:id',getAsync);
router.delete("/delete/:id",deleteAsync);
router.put('/update',updateAsync);

module.exports= router;