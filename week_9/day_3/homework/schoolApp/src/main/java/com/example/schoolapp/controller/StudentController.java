package com.example.schoolapp.controller;

import com.example.schoolapp.model.Student;
import com.example.schoolapp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController  // system knows this handles the HTTP request
public class StudentController {

    @Autowired
    StudentService studentService; // tells the controller to interact with the service layer, creates a bean

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping(value = "/students", params = {"name"})
    public List<Student> getAllStudentByName(@RequestParam String name) { // gets from query
        return studentService.getAllStudentsByName(name);
    }

    @GetMapping("/students/{id}")
    public Student getOneStudent(@PathVariable Integer id) { // gets from URL path
        return studentService.getOneStudent(id);
    }

    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student) { // will take a JSON and turn into a Book object
        return studentService.addStudent(student);
    }

    @PutMapping("/students/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) throws Exception {
        return studentService.updateStudent(id, student);
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable int id) {
        studentService.deleteStudent(id);
    }
}
