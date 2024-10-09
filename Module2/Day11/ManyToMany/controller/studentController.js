const Student = require('../Models/student');
const Course = require('../Models/course');
const { json } = require('body-parser');



exports.createStudent = async (req, res) => {
  try {
    console.log("Create student")
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



exports.getstudent=async(req,res)=>{
    try{
          const student=await Student.findById(req.params.id)
          if(!student)
            {
               res.status(404).json("no uses found")
            }
            else{
                res.status(202).json(student);
            }
    }
    catch(error)
    {
        res.status(400).json({ message: error.message });
    }
    }
    
    exports.getAllStudent=async(req,res)=>{
        try{
             const stdnt=await Student.find();
             if(!stdnt)
             {
                res.status(404).json("no uses found")
             }
             else{
                res.json(stdnt)
             }
        }
        catch(error)
        {
        res.status(400).json({ message: error.message });
            
        }
    }
    

exports.enrollStudentInCourse = async (req, res) => {
  const { studentId, courseId } = req.body;
  try {
    await Student.findByIdAndUpdate(studentId, { $push: { courses: courseId } });
    await Course.findByIdAndUpdate(courseId, { $push: { students: studentId } });
    res.status(200).json({ message: 'Student enrolled :<' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.deleteCourseInStudent = async (req, res) => {
    try {
      console.log('Deleting Course from Student');
      const { studentId, courseId } = req.body;
  
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json("No course found");
      }
  
      const updatedStudent = await Student.findByIdAndUpdate(
        studentId,{ $pull: { courses: courseId } });
  
      if (!updatedStudent) {
        return res.status(404).json("No student found");
      }
  
      res.status(200).json(updatedStudent); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

exports.createCourse = async (req, res) => {
    try {
      console.log("insert course");
      const course = new Course(req.body);
      await course.save();
      res.status(201).json(course);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateCourse = async (req, res) => {
    try {
      console.log("Ready To Update");
      const { courseId, title, description } = req.body;
      const courseUpdate = await Course.findByIdAndUpdate(req.params.id, { $set: { title, description } }, { new: true });
      if (!courseUpdate) {  
        return res.status(404).json("No course found"); 
      }
      res.status(200).json(courseUpdate); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  


exports.getAllCourse=async(req,res)=>{
    try{
        console.log("All Course get")
         const course=await Course.find();
         if(!course)
         {
            res.status(404).json("no uses found")
         }
         else{
            res.json(course)
         }
    }
    catch(error)
    {
    res.status(400).json({ message: error.message });
        
    }
}

exports.getStudentWithCourse= async(req,res)=>{
    try{
       const Data=await Student.findById(req.params.id).populate('Course');
       if (!Data) return res.status(404).json({ message: 'Data not found' }); 
       res.json(Data);
     } catch (error) {
       res.status(500).json({ message: error.message }); 
     }
}

