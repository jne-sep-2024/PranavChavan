const Task=require('../model/Task');
const Employee=require('../model/employee');

exports.createTask=async(req,res)=>{
    try
   {
     const {title,description,dueDate,status,employeeId}=req.body;
     const task=new Task({title,description,dueDate,status,employeeId});
     await task.save();
    const  updatedEmployee=await Employee.findByIdAndUpdate(
        employeeId,
        { $push: { task: task._id } },
        { new: true } 
      );
      console.log("Updated Employee:", updatedEmployee);  
    
    const populatedEmployee = await Employee.findById(employeeId).populate('task');
    console.log("Populated Employee with tasks:", populatedEmployee);
    
     res.status(201).json(populatedEmployee)
   }
    catch(error){
        res.status(400).json({ message: error.message });
    }
}

exports.getTask=async(req,res)=>{
    try
    {
      const idvalue=req.params.id;
      const task=await Task.findById(idvalue);
      res.status(200).json(task)
    }
     catch(error){
         res.status(400).json({ message: error.message });
     }
}

exports.getAllTask=async(req,res)=>{
    try
    {
       console.log("get all task")
      const task=await Task.find();
      res.status(200).json(task)
    }
     catch(error){
         res.status(400).json({ message: error.message });
     }
}
exports.editEmployee=async(req,res)=>{
     

}


