package com.example.calculator.repository;

import com.example.calculator.model.Calculator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICalculatorRepository extends JpaRepository<Calculator, Integer> {

    // method that will return a certain result based on the JPQL query
    @Query("SELECT c FROM Calculator c WHERE c.operation = :operation")
    List<Calculator> findByOperation(@Param("operation") String operation);
}
