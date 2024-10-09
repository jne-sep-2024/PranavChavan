const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');


router.post('/student', studentController.createStudent); 
router.post('/enroll', studentController.enrollStudentInCourse); 
router.get('/students',studentController.getAllStudent);
router.get('/student/:id',studentController.getstudent);
router.put('/student',studentController.deleteCourseInStudent);
router.get('/studentAllData',studentController.getStudentWithCourse);

router.post('/course', studentController.createCourse); 
router.patch('/course/:id',studentController.updateCourse);
router.get('/courses',studentController.getAllCourse);

module.exports = router;
