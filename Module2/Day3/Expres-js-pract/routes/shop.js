const express = require('express');
const path=require('path')
const router=express.Router();

router.use('/shop',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'Views', 'shop.html'));
    const array=require('./shop')
    console.log(array);
})

module.exports= router;

