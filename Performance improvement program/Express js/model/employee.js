const mongoose=require('mongoose');

const EmployeeSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    task: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }] 
})
const Employee=mongoose.model('Employee',EmployeeSchema);
module.exports=Employee;