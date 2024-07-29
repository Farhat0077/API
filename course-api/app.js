const express = require('express');
const app = express();
const PORT = 3200;

const classCourse = require('./Routers/Courses');
const classStudents = require('./Routers/Students');
const classInstructors = require('./Routers/Instructors');
app.use(express.json());

app.use('/courses', classCourse); 
app.use('/students', classStudents);
app.use('/instructors',classInstructors)

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
