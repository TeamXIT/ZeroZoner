const express = require('express');
const {createAsync, getAllAsync,getAsync,deleteAsync,updateAsync} = require('../controllers/userController');
const router = express.Router();

router.post("/create",createAsync);
router.get('/getAll',getAllAsync);
router.get('/get/:id',getAsync);
router.delete("/delete/:id",deleteAsync);
router.put('/update',updateAsync);

module.exports= router;