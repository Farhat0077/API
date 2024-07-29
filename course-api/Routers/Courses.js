const express = require('express');
const router = express.Router();

let { courses} = require('../Info'); 

// /courses
router.get('/', (req, res) => {
  const { tags, level, course_name } = req.query;
  const nameFilter = course_name ? course_name.split(",") : null;
  let filteredCourses = courses;

  if (tags) {
    const courseTags = tags.toLowerCase().split(',');
    filteredCourses = courses.filter((course) =>
      course.tags.some((tag) => courseTags.includes(tag.toLowerCase()))
    );
  }
  if (level) {
    filteredCourses = filteredCourses.filter((course) =>
      course.level.toLowerCase() === level.toLowerCase()
    );
  }

  if (nameFilter) {
    filteredCourses = filteredCourses.filter((course) =>
       course.course_name.toLowerCase() === course_name.toLowerCase()
    );
  }
  res.status(200).json({ courses: filteredCourses });
});


// /courses/:id
router.get("/:id",(req,res)=>{
    const id = req.params.id;
    const course = courses.find((cou) => cou.course_id == id);
    if (course) {
      res.status(200).json({ course: course });
    } else {
      res.status(404).json({ message: `Invalid course id ${id}` }); // Corrected template literal usage
    }
  });
  

// /courses/:id/instructors 
router.get('/:id/instructors', (req, res) => {
  const courseId = parseInt(req.params.id);

  const course = courses.find((c) => c.course_id === courseId);

  if (!course) {

    return res.status(404).json({ message:` Invalid course ID: ${courseId}` });
  }

  const instructors = course.instructors;

  res.status(200).json({ instructors });
});


// /courses/:id/students 
router.get('/:id/students', (req, res) => {
  const courseId = parseInt(req.params.id);

 
  const studentExist = students.filter((student) => student.courses );

  if (studentExist.length === 0) {
    return res.status(404).json({ message: `No student found for course ID: ${courseId}` });
  }
  const studentNames = studentExist.map((student) => student.name);
  res.status(200).json({ Students: studentNames });
});
module.exports = router;
