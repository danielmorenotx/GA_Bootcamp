package com.example.customerservice.service;

import com.example.customerservice.model.Customer;
import org.checkerframework.checker.units.qual.A;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class CustomerServiceTest {

    @Autowired CustomerService customerService;

    @Test
    void testGetAllCustomers() {
        List<Customer> expectedCustomers = new ArrayList<>();

    }
}
