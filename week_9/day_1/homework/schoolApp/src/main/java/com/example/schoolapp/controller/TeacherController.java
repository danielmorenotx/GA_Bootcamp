package com.example.schoolapp.controller;

import com.example.schoolapp.model.Student;
import com.example.schoolapp.model.Teacher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TeacherController {
    @GetMapping("/teachers")
    public List<Teacher> getAllTeachers() {
        List<Teacher> teachers = new ArrayList<>();

        Teacher teacher1 = new Teacher("Asha","Mathis","amathis@ga.com");
        Teacher teacher2 = new Teacher("Bereket","Beshane","bbeshane@ga.com");

        teachers.add(teacher1);
        teachers.add(teacher2);

        return teachers;
    }

    @GetMapping("/teacher")
    public Teacher getOneTeacher() {
        return new Teacher("C.S.","Lewis","cslewis@narnia.com");
    }

}
