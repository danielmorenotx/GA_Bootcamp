package com.example.schoolapp.controller;

import com.example.schoolapp.model.Student;
import com.example.schoolapp.repository.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentController {
    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return StudentRepository.getAllStudents();
    }

    @GetMapping("/students/{id}")
    public Student getOneStudent(@PathVariable int id) { // gets from URL path
        return StudentRepository.getOneStudent(id);
    }

    @GetMapping(value = "/students", params = {"name"})
    public Student getOneStudentByFirstName(@RequestParam String name) { // gets from query
        return StudentRepository.getOneStudentByName(name);
    }

    @PostMapping("/students")
    public List<Student> createStudent(@RequestBody Student student) { // will take a JSON and turn into a Book object
        return StudentRepository.addStudent(student);
    }

    @PutMapping("/students/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {
        return StudentRepository.updateStudent(id, student);
    }

    @DeleteMapping("/students/{id}")
    public String deleteStudent(@PathVariable int id) {
        boolean deleted = StudentRepository.deleteStudent(id);
        if (deleted) {
            return "Student with id " + id + " deleted.";
        } else {
            return "Student not found";
        }
    }
}
