const express=require('express')
const routes=express.Router();
const Authonly =require('../Auothurize/AuthorizeEmployee');
const EmployeeController =require('../controller/employeController');
const taskController=require('../controller/TaskController')
const verify=require('../verify/Verify');
const Employee = require('../model/employee');

routes.get('/employee/login',Authonly.login)
routes.get('/employee/task',taskController.getAllTask);
routes.post('/employee',EmployeeController.createEmployee);
routes.get('/employee/employees',EmployeeController.getEmployees);
routes.get('/employee/:id',verify.verifyToken,EmployeeController.getEmployee);

routes.put('/employee/:id',verify.verifyToken,EmployeeController.editEmployee);
//task routes
routes.post('/employee/task',taskController.createTask);
routes.get('/employee/task/:id',taskController.getTask);


module.exports=routes;