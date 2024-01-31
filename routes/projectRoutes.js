const express = require('express');
const {verifyUserRole}=require('../middlewares/userRoleVerifier');
const userRoleEnum= require('../helpers/userRole');
const {checkPermission}=require('../middlewares/checkPermission');
const permissionsEnum=require('../helpers/permissions');


const {createAsync, getAllAsync,getAsync,deleteAsync,updateAsync} = require('../controllers/projectController');
const router = express.Router();

//router.post("/create",authenticateToken,verifyUserRole(userRoleEnum[0]),checkPermission(permissionsEnum.ENTREPRENEUR),createAsync);
router.post("/create",verifyUserRole(userRoleEnum[1]),createAsync);
router.get('/getAll',getAllAsync);
router.get('/get/:id',getAsync);
router.delete("/delete/:id",verifyUserRole(userRoleEnum[1]),deleteAsync);
router.put('/update',verifyUserRole(userRoleEnum[1]),updateAsync);

module.exports= router;