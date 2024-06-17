package com.example.schoolapp.controller;

import com.example.schoolapp.model.Course;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CourseController {

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        List<Course> courses = new ArrayList<>();

        Course course1 = new Course("Computer Science","Science");
        Course course2 = new Course("English","Humanities");

        courses.add(course1);
        courses.add(course2);

        return courses;
    }

    @GetMapping("/course")
    public Course getOneCourse() {
        return new Course("Biology", "Science");
    }

}
