package com.example.calculator.service;

import com.example.calculator.model.Calculator;
import com.example.calculator.repository.ICalculatorRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CalculatorService {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    ICalculatorRepository calculatorRepository;

    public List<Calculator> getAllHistory(){
        return calculatorRepository.findAll();
    }

    public Calculator getById(Integer id) {
        Optional<Calculator> calculator = calculatorRepository.findById(id);
        if (calculator != null && calculator.isPresent()) {
            return calculator.get();
        }
        return null;
    }

    public int add(int a, int b) {
        int result = a + b;

        // ====== TRANSIENT STATE =========
        Calculator calculator = new Calculator();
        calculator.setOperation("Addition");
        calculator.setResult(result);
        // Only exists in memory and not associated with persistence context
        // .save() is the persistence context
        // ================================

        // ======= PERSISTENT STATE ========
        calculatorRepository.save(calculator);
        // saved or retrieved from a DB
        // everything after this is in the persistent state
        // changes after this are reflected in the object
        // =================================

        // ======= DETACHED STATE ========
        entityManager.detach(calculator);
        // no longer auto saved to the DB
        // =================================

        // ======= PERSISTENT STATE ========
        entityManager.merge(calculator);
        // will go back to the persistent state
        // changes tracked by DB
        // =================================

        return result;
    }

    public int compare(int a, int b) {
        return Math.max(a, b);
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public int divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Cannot divide by zero");
        }
        return a / b;
    }

    public int addOnlyWholeNumbers(int a, int b) {
        if (a < 0 || b < 0) {
            throw new ArithmeticException("This method only adds whole numbers");
        }
        return a + b;
    }

    public String concatenateString(String s1, String s2) {
        if (s1 == null) {
            return null;
        }

        if (s2 == null) {
            return null;
        }

        return s1 + s2;
    }
}

