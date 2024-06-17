package com.example.calculator.controller;

import com.example.calculator.service.CalculatorService;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CalculatorController.class) // specifically targets the controller
public class CalculatorControllerTest {

    @Autowired
    private MockMvc mockMvc; // creating a mock of the HTTP (postman) service

    @MockBean
    private CalculatorService calculatorService;

    @Test
    public void testGetAllHistory() throws Exception {
        mockMvc.perform(get("/calculator/history")) // mocks http request to real controller
                .andExpect(status().isOk()); // checks if the response is "ok"

        verify(calculatorService, times(1)).getAllHistory(); // always verify what is mocked (calculator service)
    }

    @Test
    public void testAdd() throws Exception {
        int num1 = 5;
        int num2 = 10;

        mockMvc.perform(get("/calculator/add")
                .param("a", String.valueOf(num1))
                .param("b", String.valueOf(num2)))
                .andExpect(status().isOk());
    }

    @Test
    public void testDivide() throws Exception {
        int num1 = 20;
        int num2 = 10;

        when(calculatorService.divide(num1, num2)).thenReturn(num1/num2);

        mockMvc.perform(get("/calculators/divide")
                        .param("a", String.valueOf(num1))
                        .param("b", String.valueOf(num2)))
                        .andExpect(status().isOk())
                        .andExpect((ResultMatcher) content().string("2"));

        verify(calculatorService, times(1)).divide(num1, num2);
    }

    @Test
    public void testDivideFail() throws Exception {

        int num1 = 20;
        int num2 = 0;

        when(calculatorService.divide(num1, num2)).thenThrow(new ArithmeticException("Error"));

        mockMvc.perform(get("/calculators/divide")
                        .param("a", String.valueOf(num1))
                        .param("b", String.valueOf(num2)))
                        .andExpect(status().isBadRequest());

        verify(calculatorService, times(1)).divide(num1, num2);

    }
}