
const courses = [
    {
      course_id: 101,
      course_name: "Introduction to JavaScript",
      instructors: ["John Doe", "Jane Smith"],
      tags: ["Web Development", "HTML", "Beginner"],
  
      duration: "10 weeks",
      level: "Beginner",
    },
    {
      course_id: 102,
      course_name: "Advanced PHP",
      instructors: ["Alice Johnson", "Bob Brown"],
      tags: ["Web Design", "CSS", "Intermediate"],
  
      duration: "12 weeks",
      level: "Advanced",
    },
    {
      course_id: 103,
      course_name: "Python for Data Science",
      instructors: ["Clara White", "Daniel Green"],
      tags: ["JavaScript", "Programming", "Advanced"],
  
      duration: "8 weeks",
      level: "Intermediate",
    },
    {
      course_id: 104,
      course_name: "Machine Learning Basics",
      instructors: ["Eva Blue", "Frank Black"],
      tags: ["Web Design", "Responsive", "CSS"],
  
      duration: "6 weeks",
      level: "Beginner",
    },
    {
      course_id: 105,
      course_name: "Web Development with React",
      instructors: ["Grace Orange", "Hank Yellow", "John Doe"],
      tags: ["Databases", "SQL", "Advanced"],
  
      duration: "10 weeks",
      level: "Intermediate",
    },
  ];
  
  const students = [
    {
      student_id: 301,
      name: "Emily Brown",
      age: 22,
      courses: ["Introduction to JavaScript", "CSS Styling Techniques"],
      major: "Computer Science",
    },
    {
      student_id: 302,
      name: "Michael Green",
      age: 24,
      courses: ["Advanced PHP", "Database Management"],
      major: "Information Technology",
    },
    {
      student_id: 303,
      name: "Sophia Black",
      age: 21,
      courses: ["Python for Data Science", "JavaScript ES6"],
      major: "Data Science",
    },
    {
      student_id: 304,
      name: "Liam White",
      age: 23,
      courses: ["Machine Learning Basics", "Responsive Web Design"],
      major: "Artificial Intelligence",
    },
    {
      student_id: 305,
      name: "Olivia Blue",
      age: 20,
      courses: ["Web Development with React", "Introduction to HTML"],
      major: "Web Development",
    },
  ];
  
  const instructors = [
    {
      instructor_id: 401,
      name: "John Doe",
      courses: [101, 204],
      department: "Computer Science",
      experience: "10 years",
    },
    {
      instructor_id: 402,
      name: "Jane Smith",
      courses: [101, 204],
      department: "Web Development",
      experience: "8 years",
    },
    {
      instructor_id: 403,
      name: "Alice Johnson",
      courses: [102],
      department: "Information Technology",
      experience: "12 years",
    },
    {
      instructor_id: 404,
      name: "Bob Brown",
      courses: [102, 205],
      department: "Software Engineering",
      experience: "15 years",
    },
    {
      instructor_id: 405,
      name: "Clara White",
      courses: [103],
      department: "Data Science",
      experience: "7 years",
    },
    {
      instructor_id: 406,
      name: "Daniel Green",
      courses: [103, 203],
      department: "Data Science",
      experience: "9 years",
    },
    {
      instructor_id: 407,
      name: "Eva Blue",
      courses: [104],
      department: "Artificial Intelligence",
      experience: "5 years",
    },
    {
      instructor_id: 408,
      name: "Frank Black",
      courses: [104],
      department: "Machine Learning",
      experience: "6 years",
    },
    {
      instructor_id: 409,
      name: "Grace Orange",
      courses: [105],
      department: "Web Development",
      experience: "10 years",
    },
    {
      instructor_id: 410,
      name: "Hank Yellow",
      courses: [105, 202],
      department: "Web Development",
      experience: "11 years",
    },
  ];
  
  module.exports = { instructors, courses, students };