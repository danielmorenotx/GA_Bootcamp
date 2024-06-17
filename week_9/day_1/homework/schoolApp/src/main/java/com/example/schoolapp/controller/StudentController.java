package com.example.schoolapp.controller;

import com.example.schoolapp.model.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentController {
    @GetMapping("/students")
    public List<Student> getAllStudents() {
        List<Student> students = new ArrayList<>();

        Student student1 = new Student("Zach","Kapalka","zkapalka@indeed.com");
        Student student2 = new Student("Emily","Kaiser","ekaiser@indeed.com");
        Student student3 = new Student("Ashley","Duan","aduan@indeed.com");
        Student student4 = new Student("Erica","Sowder","esowder@indeed.com");
        Student student5 = new Student("Daniel", "Moreno", "dmoreno@indeed.com");

        students.add(student1);
        students.add(student2);
        students.add(student3);
        students.add(student4);
        students.add(student5);

        return students;

    }

    @GetMapping("/student")
    public Student getOneStudent(@RequestParam String firstName) {
        List<Student> students = getAllStudents();

        for (Student student : students) {
            if (student.getFirstName().equalsIgnoreCase(firstName)) {
                return student;
            }
        }
        return null;
    }
}
