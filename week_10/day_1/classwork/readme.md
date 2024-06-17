
# SchoolApp - Spring Boot Application

## Overview
This guide outlines the steps to create and expand a simple Spring Boot application named `schoolApp`. 
The application is designed to manage students, courses, and teachers.

## Getting Started

### Initial Setup
> **Create Spring Boot Application**: You can use the same code base from lastweeks homework and add more functionalities to it OR you can start from scratch, since some students dont like working on existing code and remodifying it.

### Define Models
Create models representing the core entities of the application and their relationships:

- **Student**: Should have fields such as id, name, a list of courses (many-to-many relationship with courses), and an address (one-to-one relationship).
- **Course**: Include fields like id, name, teacher (many-to-one relationship with teacher), and (many-to-many relationship with students) a list of Students to represent enrolled students.
- **Teacher**: Should contain id, name, and a list of courses they teach (one-to-many relationship).
- **Address**: Should contain fields like id, street, city, state, and postalCode.

### Implement Controllers
Under the `controller` package, create controllers for each model:
- **StudentController**
- **CourseController**
- **TeacherController**

### Expose CRUD Endpoints
Each controller should expose CRUD (Create, Read, Update, Delete) endpoints for its respective model.
Additionally, implement the following relationship-specific endpoints:

#### Student Controller
- `POST /students/{id}/courses`: Adds courses to the list of courses a student has.
- `GET /students/{id}/courses`: Gets a list of courses a student has enrolled in.
- `GET /students/{id}/courses/{courseId}`: Get details of a specific course a student takes.
- `DELETE /students/{id}/courses/{courseId}`: Delete a course from a student's list.

#### Teacher Controller
- `POST /teachers/{id}/courses`: Add a course to a teacher.
- `GET /teachers/{id}/courses`: Gets a list of courses a teacher has.

#### Course Controller
- `PUT /courses/{id}`: Update the details of a course.

#### BONUS
- `GET /students/{id}/courses/{courseId}/teachers`: Gets a list of teachers from a course  student has enrolled in.
- `GET /students/{id}/courses/{courseId}/teachers/{teacherId}`: Gets a teachers from a course student has enrolled in.

### Testing Endpoints
Test all endpoints using Postman or any HTTP client to ensure they work as expected.

## Deliverables
- Source code of the Spring Boot application, including all models, controllers, and repository classes.

## Submission
- Submit your assignment through GitHub. Ensure to commit your changes frequently with meaningful commit messages.

## Good Luck!