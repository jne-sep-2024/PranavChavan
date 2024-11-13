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
        console.log("getting the employee123")
      const empId=req.params.id;
      console.log("id:::",empId)
const employee=await Employee.findById(empId)


//const employee=await Employee.find({username:req.params.username})  
//const employee=await Employee.find({email:req.params.email}) 

 const employeeForTask = await Employee.find()
   .populate('task', 'title description dueDate status')  
  .exec();

// const tasksForEmployee = await Task.find()
// .populate('employeeId', 'username email') // populate employee details
// .exec();
    
const LeastTask = await Employee.find({
    'task.status': 'pending'
  })  //LeastTask [] getting empty
console.log("LeastTask",LeastTask)
// const atLeastTask = await Employee.find({
//     'task.status': 'pending'  
//   })
//   .populate({
//     path: 'task',              
//     match: { status: 'pending' },  
//     select: 'title description dueDate status',  
//     options: { limit: 5 }     
//   })
//   .exec();//[]

// const atLeastTask = await Task.find({
//     status: 'pending',
       
// })
// .populate('employeeId', 'username email')  // Populate employeeId with username and email
// .exec();

// console.log(atLeastTask);
const employeesWithPendingTasks = await Employee.aggregate([
    {
      $lookup: {
        from: 'tasks', // Assuming tasks are in the 'tasks' collection
        localField: '_id', // The field in the Employee model that corresponds to the _id
        foreignField: 'employeeId', // Assuming the task collection has an 'employeeId' field that references Employee
        as: 'task' // The alias for populated tasks
      }
    },
    {
      $unwind: {
        path: '$task', // Unwind the 'task' array to get individual tasks
        preserveNullAndEmptyArrays: true // Keep employees with no tasks as well
      }
    },
    {
      $match: {
        'task.status': 'pending' // Filter tasks with status 'pending'
      }
    },
    {
      $project: {
        _id: 1,
        username: 1,
        email: 1,
        task: {
          _id: 1,
          title: 1,
          description: 1,
          dueDate: 1,
          status: 1
        }
      }
    }
  ]);
  
  console.log(employeesWithPendingTasks);
  
 console.log(employeeForTask);
res.status(200).json(employeesWithPendingTasks)
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
        console.log("getting the employees")
     
      const employee=await Employee.find({})
      res.status(200).json(employee)
    }
     catch(error){
         res.status(400).json({ message: error.message });
     }
}
