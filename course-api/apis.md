# instructors

## /instructors             DONE

**if there are instructors:**
HTTP status code 200
returns array of instructors in an JSON object

**if there is no instructor then:**
HTTP status code 200
return an empty array in a JSON object




## /instructors/:id   //DONE

**if an instructor with provided id exits:**
HTTP status code 200
returns instructor in a JSON object

**if an instructor with provided id is not found then:**
HTTP status code 404
returns an object with a generic message (e.g. instructor with id :id not found)




 ## /instructors/:id/courses           //DONE
 **if instrutor with provide id does not exist then:**
HTTP status code 404
returns an object with a generic message (e.g. instructor with id :id not found)

**if an instructor is found and has any number of courses:**
HTTP status code 200
returns all courses associated with the instructor in an array in a JSON object

**if instructor is found and does not teach any course**
HTTP status code 200
return an empty array in a JSON object




## /instructors/:id/courses/:courseId     //DONE

**if instrutor with provide id does not exist then:**
HTTP status code 404
returns an object with a generic message (e.g. instructor with id :id not found)

**if instrutor is associated with provided course id:**
HTTP status code 200
returns course information with in a JSON object

**if instrutor is found and there is not associated course for with provided id then:**
HTTP status code 404
returns an object with a generic message (e.g. invalide course id. Course with id :id not found)




## /instructors?department=web development     

**if any number of instructors found with provided department:**
HTTP status code 200
returns array of instructors in "web development" department in a JSON object


**if no instructor is not found with provided department then:**
HTTP status code 200
returns an empty array in a JSON object



## /instructors?department=department1,department2,department3   

**if any number of instructors found in department1, department2, or department3 is found:**
HTTP status code 200
returns array of instructors in "web development" department in a JSON object


**if no instructor is not found with provided department then:**
HTTP status code 200
returns an empty array in a JSON object


# courses

## /courses             //done

**if there are courses**
HTTP status code 200
return array of courses in a JSON object

**if there is no courses**
HTTP status code 200
return an emtpy array


## /courses?tags=tag1,tag2,tag3,tag4             //done

**if tag is given in query string, and there are courses wich has one of the given tags (e.g. tag1, tag2, tag3)**
HTTP status code 200
return array of courses related to those tags in a JSON object

**if tag is not provided then:**
do the same as `/courses`

 
## /courses?level=advanced                   //done
**if level is given in query string, and there are courses wich has one of the given level (e.g. advanced, intermediate, beginner)**
HTTP status code 200
return array of courses related to those levels in a JSON object

**if level is not provided then:**
do the same as `/courses`

## /courses?tags=tag1,tag2,tag3,tag4&level=advanced                  //done
**filters and returns courses which are advanced level and have at least one of the provided tags**
HTTP status code 200
return array of courses related to provided levels and tags in a JSON object
returns an emtpy array if courses with provided condition is not found

**if tag is not provided in query string**
do the same as `/courses?level=advanced`

**if level is not provided in query string**
do the same as `/courses?tags=tag1,tag2,tag3,tag4`

**if no tag and no level is provided then**
do the same as `/courses`




## /courses/:id        //done
**if a course with provided id exits**
HTTP status code 200
return the course in a JSON object

**if a course with provided id is not found**
HTTP status code 404
return a generic message in a JSON object (e.g. invalid course id :id)


## /courses/:id/instructors     //done
**if a course with provided id exits**                  
HTTP status code 200
return instructors of the course in an array in a JSON object

**if a course with provided id is not found**
HTTP status code 404
return a generic message in a JSON object (e.g. invalid course id :id)




## /courses/:id/students        //done         
**if a course with provided id exits**
HTTP status code 200
return particpants of the course in an array in a JSON object

**if a course with provided id is not found**
HTTP status code 404
return a generic message in a JSON object (e.g. invalid course id :id)












# students   //Done

## /students

**if there are students**
HTTP status code 200
return array of students in a JSON object

**if there is no students**
HTTP status code 200
return an emtpy array


## /students?age=12-15                        

**if there are students between age 12 to 15 including 12 and 15**
HTTP status code 200
return array of students in a JSON object

**if there is no students between the provided age**
HTTP status code 200
return an emtpy array

**if no age in query string is provided then**
do the same as `/students`




## /students/:id     //Done
**if a student with provided id exits**
HTTP status code 200
return the student in a JSON object

**if a student with provided id is not found**
HTTP status code 404
return a generic message in a JSON object (e.g. invalid student id :id)




## /students/:major                  DONE
**if a any number of students with provided major exits**
HTTP status code 200
return array of student in a JSON object

**
HTTP status code 200
return a an emtpy array
 
