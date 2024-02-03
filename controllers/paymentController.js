const {pg}= require('../config/cashfree');
 const createOrder = async (req,res)=>{
    console.log("Called createOrder method.");
    res.status(200).json('called createorder');
 }
 module.exports={createOrder};