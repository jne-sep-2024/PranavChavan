const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secretKey='HardToCrack';
const Employee = require('../model/employee');  

   module.exports.login = async function(req, res) {
  console.log("login the Employeeee")
  const { email, password } = req.body;

  try {
    const employee = await Employee.findOne({ email });
    if (!employee) {
      return res.status(400).json({ message: 'Employee not found' });
    }
    const isdata = await bcrypt.compare(password, employee.password);
    if (!isdata) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: employee._id, username: employee.username, email: employee.email }, 
      secretKey, 
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
