const express = require('express');
const path=require('path')
const router=express.Router();

const arr=[];

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'Views', 'add-product.html'));
})
router.post('/pdata',(req,res)=>{
    // console.log(req.body);
    arr.push(req.body.title );
    res.redirect('/shop');
});

module.exports.router = router;
module.exports.arr=arr;