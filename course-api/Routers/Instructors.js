const express = require('express');
const router = express.Router();
let { instructors} = require('../Info'); 


// /instructors
router.get('/', (req, res) => {
  const { name,department } = req.query;
  const nameFilter = name ? name.split(",") : null;
  let filteredInstructors = instructors;

  if (department) {
    filteredInstructors = filteredInstructors.filter((inst) =>
      inst.department.toLowerCase() === department.toLowerCase()
    );
  }

  if (nameFilter) {
    filteredInstructors = filteredInstructors.filter((inst) =>
       inst.name.toLowerCase() === name.toLowerCase()
    );
  }
  res.status(200).json({ instructors: filteredInstructors });
});
  ///instructors/:id 
  
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    const instructor = instructors.find((inst) => inst.instructor_id == id);
  
    if (instructor) {
      res.status(200).json({ instructor: instructor });
    } else {
      res.status(404).json({ message: `Instructor with id ${id} not found `});
    }
  });
  //   /instructors/:id/courses 
  router.get("/:id/courses", (req, res) => {
    const id = req.params.id;
    const instructor = instructors.find((inst) => inst.instructor_id == id);
    if (instructor) {
      const existingCourses = courses.filter((course) => {
        return course.instructors.includes(instructor.name);
      });
      res.status(200).json({ courses: existingCourses });
    } else {
      res.status(404).json({ message: "instructor not found" });
    }
  });
  
  //   /instructors/:id/courses/:courseId   
  router.get("/:id/courses/:courseId", (req, res) => {
    const id = req.params.id;
    const courseId = req.params.courseId;
    const instructor = instructors.find((inst) => inst.instructor_id == id);
  
    if (instructor) {
      const existingCourses = courses.filter((course) =>
        course.instructors.includes(instructor.name)
      );
  
      const course = existingCourses.find(
        (course) => course.course_id == courseId
      );
  
      if (course) {
        res.status(200).json({ course: course });
      } else {
        res.status(404).json({ message: "course not found" });
      }
    } else {
      res.status(404).json({ message: "instructor not found" });
    }
  });
  module.exports = router;

