const express=require('express')
const router=express.Router();

const users=[
    {
    id:101,
    name:"headphone",
    price:"900.34"
    },
    {
        id:102,
        name:"mobile",
        role:"9998"
          
    }
];
router.get('/productDetails/:id',(req,res,)=>{
    const user=users.filter(i=>i.id==101)
    console.log("user",user)
    res.json(user)
})

module.exports=router;

