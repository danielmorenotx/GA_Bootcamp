package com.example.schoolapp.controller;

import com.example.schoolapp.model.Course;
import com.example.schoolapp.model.Student;
import com.example.schoolapp.model.Teacher;
import com.example.schoolapp.repository.CourseRepository;
import com.example.schoolapp.repository.TeacherRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TeacherController {
    @GetMapping("/teachers")
    public List<Teacher> getAllTeachers() {
        return TeacherRepository.getAllTeachers();
    }

    @GetMapping("/teachers/{id}")
    public Teacher getOneTeacher(@PathVariable int id) {
        return TeacherRepository.getOneTeacher(id);
    }

    @GetMapping(value = "/teachers", params = "name")
    public Teacher getTeacherByName(@RequestParam String name) {
        return TeacherRepository.getTeacherByName(name);
    }

    @PostMapping("/teachers")
    public List<Teacher> createTeacher(@RequestBody Teacher teacher) { // will take a JSON and turn into a Book object
        return TeacherRepository.addTeacher(teacher);
    }

    @PutMapping("/teachers/{id}")
    public Teacher updateTeacher(@PathVariable int id, @RequestBody Teacher teacher) {
        return TeacherRepository.updateTeacher(id, teacher);
    }

    @DeleteMapping("/teachers/{id}")
    public String deleteTeacher(@PathVariable int id) {
        boolean deleted = TeacherRepository.deleteTeacher(id);
        if (deleted) {
            return "Teacher with id " + id + " deleted.";
        } else {
            return "Teacher not found";
        }
    }
}
