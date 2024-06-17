package com.example.calculator.service;

import com.example.calculator.model.Calculator;
import com.example.calculator.repository.ICalculatorRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest
public class CalculatorServiceTest {

    @Autowired
    private CalculatorService calculatorService;

    @MockBean
    private ICalculatorRepository calculatorRepository; // mock the calculator repo
    // every time calculatorRepository is called in a method, it will create a mock call

    @Test
    public void testAdd() {
        int a = 10;
        int b = 20;

        int result = calculatorService.add(a, b);

        Calculator calculator = new Calculator();
        calculator.setOperation("addition");
        calculator.setResult(result);

        verify(calculatorRepository, times(1)).save(calculator); // should call save at least once
    }

    @Test
    public void testGetAllHistory() { // testing findAll
        // creating a list of calculators to mimick the history

        Calculator calculator1 = new Calculator();
        calculator1.setOperation("addition");
        calculator1.setResult(10);
        calculatorRepository.save(calculator1);

        Calculator calculator2 = new Calculator();
        calculator2.setOperation("addition");
        calculator2.setResult(20);
        calculatorRepository.save(calculator1);

        List<Calculator> mockHistory = Arrays.asList(calculator1,calculator2); // adds the two calculators to a list

        when(calculatorRepository.findAll()).thenReturn(mockHistory);
        // when you do a calculator.findAll, return the mock history

        List<Calculator> actualHistory = calculatorService.getAllHistory();

        assertEquals(actualHistory.size(), 2, "size was expected to be 2"); // checking if it's a size of two calculators

        assertEquals(actualHistory, mockHistory); // checks if the list of calculators are the same
    }

    @Test
    public void testGetHistoryById() {
        // Test-driven development, write the test that will fail first
        // then create the method

        calculatorService.getById(10);
        verify(calculatorService, times(1)).getById(1);
    }

    @Test // any method after this is a test method
    void testAddition() {
        int result = calculatorService.add(3, 4);
        assertEquals(7, result); // compares if the expected output and the result are the same
    }

    @Test
    void testCompare() {
        int result = calculatorService.compare(1,2);
        assertEquals(2, result);
    }

    @Test
    void testSubtraction() {
        int result = calculatorService.subtract(10, 5);
        assertEquals(5, result);
    }

    @Test
    void testMultiplication() {
        int result = calculatorService.multiply(2, 6);
        assertEquals(12, result);
    }

    @Test
    void testDivision() {
        int result = calculatorService.divide(15, 3);
        assertEquals(5, result);
    }

    @Test
    void testDivideByZero() {
        assertThrows(ArithmeticException.class, () -> calculatorService.divide(10, 0));
    }

    // Happy path - ideal scenario
    @Test
    void testAddOnlyWholeNumbers() {
        int result = calculatorService.addOnlyWholeNumbers(4000,10000);
        assertEquals(14000, result);
    }

    // Sad path - cover edge cases or other scenarios that are outside the normal flow
    @Test
    void testWithNegativeAddOnlyWholeNumbers() {
        assertThrows(ArithmeticException.class, () -> calculatorService.addOnlyWholeNumbers(-1, 100));
    }

    @Test
    void testConcatenateStringPass() {
        String result = calculatorService.concatenateString("Hello", "World");

        assertEquals("HelloWorld", result);

        result = calculatorService.concatenateString(null, "World");

        assertEquals(null, result);
    }
}
