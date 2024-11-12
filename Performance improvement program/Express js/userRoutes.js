const express=require('express')
const router=express.Router();

const users=[
    {
    id:101,
    name:"pranav",
    role:"engg"
    },
    {
        id:102,
        name:"kishore",
        role:"manager"
          
    }
];
router.get('/userDetails/:id',(req,res,)=>{
    const user=users.filter(i=>i.id==101)
    console.log("user",user)
    res.json(user)
})

module.exports=router;

