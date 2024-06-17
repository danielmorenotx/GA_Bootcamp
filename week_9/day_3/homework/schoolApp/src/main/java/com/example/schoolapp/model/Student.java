package com.example.schoolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.List;

@NoArgsConstructor // creates a default constructor with no arguments
@AllArgsConstructor // creates constructor with all parameters
@Data // creates getters and setters behind the scenes, no need to create them
@Entity // indicates that a class is an entity and should be mapped to a database table
// @RequiredArgsConstructor // will read all the values with the @NonNull label on them
public class Student {

    @Id // tells Springboot the next variable is an ID
    @GeneratedValue(strategy = GenerationType.SEQUENCE) // tells Spring how to sequence primary key
    private int id;

    private String name;
    private String email;

}
