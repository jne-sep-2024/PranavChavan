
const jwt =require('jsonwebtoken')
const secretKey = 'HardToCrack'; 

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


module.exports = function(req, res, next) {
    const token = jwt.sign({ id:req.params.id }, secretKey, { expiresIn: '5m' });
    console.log("token",token)
    console.log("header",req.headers)
    if (!token) {
      return res.status(403).json({ message: "No token provided" });
    }   
   
  next();
}
