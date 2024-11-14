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
      let task=await Task.findById(idvalue);
   //Retrieve all tasks and return only their title and description.
    //   task=await Task.aggregate([
    //     {
    //         $project:{
    //             _id: 0,
    //             title:1,
    //             description:1
    //         }
    //     }
    //   ]) 

    //Group tasks by employeeId and count how many tasks each employee has.
    // task=await Task.aggregate([
    //     {
    //         $match: {
    //           employeeId: { $ne: null } 
    //         }
    //       },
    //         { $group:
    //              { _id: "$employeeId", total: { $sum: 1} } }
        
    // ])


    // task=await Task.aggregate([
    //     {
    //         $match:{
    //             employeeId:{$ne:null}
    //            } 
    //     },
    //         {
    //           $group:{
    //             _id:"$employeeId",total:{$sum:1}
    //           }
    //         }
        
    // ])
    //Find all tasks where the dueDate is earlier than today's date and the status is not "completed".
    // task=await Task.aggregate([
    //    { $match:{
           
    //          dueDate:{$lte:new Date()}
            
    //          }
    //     }
    // ])Retrieve all tasks for a given employee, by filtering tasks based on employeeId (using $match).

    //Retrieve all tasks for a given employee, by filtering tasks based on employeeId (using $match).
    // task=await Task.aggregate([
    //     {
    //       $match :{
    //        employeeId:idvalue
    //       }
    //     }
    // ])
     
  //  For a specific employee, retrieve all their tasks along with their username and email from the Employee collection.
    // task=await Task.aggregate([
    //     {
    //         $lookup:{
    //            from :'employees',
    //             as:'employeDetails',
    //             localField:'_id',
    //             foreignField:'task'
    //         }
    //     }
    //     ,{
    //         $project:{
    //             _id: 1,
    //             title: 1,
    //             description: 1,
    //             dueDate: 1,
    //             status: 1,
    //             employeDetails:{
    //                 _id: 1,
    //                 username: 1,
    //                 email: 1,
    //             }
    //         }
    //     }
    // ])

//Group tasks by their status field and count how many tasks exist in each category (e.g., "pending", "in-progress", "completed").
    // const task = await Task.aggregate([
    //     {
    //       $group: {
    //         _id: "$status",  
    //         count: { $sum: 1 }  
    //       }
    //     }
    //   ])
//Find all tasks whose description field contains the word "Server" and count.
 task = await Task.aggregate([
    {
      $match: {
        title: { $regex: "Server"}  
      }
    }
    ,{
      $group:{
        _id:"$title" ,countOfWord:{$sum:1}
      }
    }
  ]);
  
//Identify employees who have more than 3 tasks assigned and return those tasks.
  task= await Employee.aggregate([
    {
        $addFields: {
            taskCount: { $size: { $ifNull: ["$task", []] } } 
          }
      }
      ,{
    $match:{
           taskCount:{$gte:4}
        }
      },
      {
        $project: {
            _id: 1,
            username: 1,
            email: 1,
            taskCount:1
        }
      }
      
  ])

  console.log(task);

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
     
      const currentDate = new Date();
      const tasks = await Task.find({ dueDate: { $gte: currentDate } });
       
      const status_Task="pending";
      const pendingTask= await Task.find({status:status_Task});
     
      const inProgress_Task="in-progress";
      let taskss=await Task.find({status:inProgress_Task});
       console.log(pendingTask);
       res.status(200).json(task)
    }
     catch(error){
         res.status(400).json({ message: error.message });
     }
}

exports.editEmployee=async(req,res)=>{
     

}


