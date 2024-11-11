const Task=require('../model/Task');
const Employee=require('../model/employee');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secretKey='HardToCrack'
exports.createEmployee = async (req, res) => {
    try {
         console.log("Creating employee...");
         
         const { username, password, email } = req.body;
         
         const existingEmployee = await Employee.findOne({ email });
         
         if (existingEmployee) {
             return res.status(400).json({ message: 'Employee already exists' });
         }
         
         const hashpwd = await bcrypt.hash(password, 10);
         
         const employee = new Employee({
             username,
             password: hashpwd,  
             email
         });
         
         await employee.save();
         
         res.status(201).json({ message: "Employee Created" });
     } catch (error) {
         res.status(400).json({ message: error.message });
     }
 };
 
exports.getEmployee=async(req,res)=>{
    try
    {
        console.log("getting the employee")
      const id=req.params.id;
      const employee=await Employee.findById(id)
      res.status(200).json(employee)
    }
     catch(error){
         res.status(400).json({ message: error.message });
     }
}
exports.editEmployee=async(req,res)=>{
 try{
    console.log("Edit by id ")
    const {username } = req.body; 
    const employee = await Employee.findByIdAndUpdate(req.params.id, { $set: { username} }, { new: true });
    res.status(200).json(employee)
  }
   catch(error){
       res.status(400).json({ message: error.message });
   }

}

exports.getEmployees=async(req,res)=>{
    try
    {
        console.log("getting the employee")
     
      const employee=await Employee.find()
      res.status(200).json(employee)
    }
     catch(error){
         res.status(400).json({ message: error.message });
     }
}
