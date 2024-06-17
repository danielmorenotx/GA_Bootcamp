package com.example.schoolapp.controller;

import com.example.schoolapp.model.Course;
import com.example.schoolapp.model.Student;
import com.example.schoolapp.repository.CourseRepository;
import com.example.schoolapp.repository.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CourseController {

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return CourseRepository.getAllCourses();
    }

    @GetMapping("/courses/{id}")
    public static Course getOneCourse(@PathVariable int id) {
        return CourseRepository.getOneCourse(id);
    }

    @GetMapping(value = "/courses", params = "name")
    public Course getCourseByName(@RequestParam String name) {
        return CourseRepository.getCourseByname(name);
    }

    @PostMapping("/courses")
    public List<Course> createCourse(@RequestBody Course course) { // will take a JSON and turn into a Book object
        return CourseRepository.addCourse(course);
    }

    @PutMapping("/courses/{id}")
    public Course updateCourse(@PathVariable int id, @RequestBody Course course) {
        return CourseRepository.updateCourse(id, course);
    }

    @DeleteMapping("/courses/{id}")
    public String deleteCourse(@PathVariable int id) {
        boolean deleted = CourseRepository.deleteCourse(id);
        if (deleted) {
            return "Course with id " + id + " deleted.";
        } else {
            return "Course not found";
        }
    }
}
