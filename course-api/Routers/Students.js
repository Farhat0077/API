const express = require('express');
const router = express.Router();
let { students} = require('../Info'); 

// students
// /students?age=12-15  
router.get('/', (req, res) => {
    const { nameS, age } = req.query;
    let filteredStudents = students;
    if (nameS) {
      const nameList = nameS.split(',');
      filteredStudents = students.filter((student) =>
        nameList.some((name) => student.name.toLowerCase().includes(name.toLowerCase()))
      );
    }
    if (age) {
      const [minAge, maxAge] = age.split('-').map(Number);
      filteredStudents = filteredStudents.filter((student) => student.age >= minAge && student.age <= maxAge);
    }
  
    if (filteredStudents.length === 0) {
      return res.status(200).json({ message: 'No students found for the given criteria' });
    }
  
    res.status(200).json({ students: filteredStudents });
  });


  //    /students/:id
  //    /students/:major
  
  router.get("/:param" , (req, res) => {
    const param = req.params.param;
    const studentId = students.find((stu) => stu.student_id == param);
    const studentMajor = students.find((stu) => stu.major == param);
  
    if (!isNaN(param)) {
     
      if (studentId) {
        res.status(200).json({ studentId: studentId });
      } else {
        res.status(404).json({
          message:` Invalid student ID: ${param}`,
        });
      }
    } else {
  
      if ( studentMajor) {
  
        res.status(200).json({  studentMajor: studentMajor });
      } else {
        res.status(200).json({});
      }
    }
  });
module.exports = router;
