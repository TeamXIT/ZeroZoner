const express=require('express');
const {createAsync, getAllAsync,getAsync,deleteAsync,updateAsync} = require('../controllers/projectController');
const multer = require('multer');

const storage = multer.memoryStorage(); // Use memory storage for saving files as buffers in MongoDB
const upload = multer({ storage: storage });

const router=express.Router();
router.post("/create",upload.fields([
    { name: 'presentation', maxCount: 1 },
    { name: 'pitchDeck', maxCount: 1 },
    { name: 'report', maxCount: 1 },
  ]),createAsync);
router.get('/getAll',getAllAsync);
router.get('/get/:id',getAsync);
router.delete("/delete/:id",deleteAsync);
router.put("/update/:id",upload.fields([
    { name: 'presentation', maxCount: 1 },
    { name: 'pitchDeck', maxCount: 1 },
    { name: 'report', maxCount: 1 },
  ]),updateAsync);

module.exports= router;