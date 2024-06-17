package com.example.schoolapp.service;

import com.example.schoolapp.model.Student;
import com.example.schoolapp.repository.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service // this is where the business logic goes
public class StudentService {

    @Autowired
    IStudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public List<Student> getAllStudentsByName(String name) {
        return studentRepository.findAllByName(name);
    }

    public Student getOneStudent(int id) {
        return studentRepository.findById(id).orElse(null);
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public void deleteStudent(Integer id) {
        studentRepository.deleteById(id);
    }

    public Student updateStudent(Integer id, Student student) throws Exception {
        // first get customer with the id
        Student oldStudent = studentRepository.findById(id).orElse(null);

        if (oldStudent == null) {
            throw new Exception("Student with id " + id + " not found");
        }

        oldStudent.setName(student.getName());
        oldStudent.setEmail(student.getEmail());

        //Model Mapper - auto map properties for us
        return studentRepository.save(oldStudent);
    }
}
