package com.example.ecommerce.controller;

import com.example.ecommerce.model.Customer;
import com.example.ecommerce.model.Order;
import com.example.ecommerce.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("/customers")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping(value = "/customers", params = {"name"})
    public List<Customer> getAllCustomersByName(@RequestParam String name) {
        return customerService.getAllCustomersByName(name);
    }

    @PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer customer) {
        Customer newCustomer = customerService.addCustomer(customer);
        return newCustomer;
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable int id) {
        customerService.deleteCustomer(id);
    }

    @PutMapping("/customers/{id}")
    public Customer updateCustomer(@PathVariable int id, @RequestBody Customer customer) throws Exception {
        return customerService.updateCustomer(id, customer);
    }

    // Customers with Orders
    @PostMapping("/customers/{id}/orders") // for all the customers with the id, add the one order to the customer
    public Customer addOrderToCustomer(@PathVariable Integer id, @RequestBody Order order) throws Exception {
        Customer customer = customerService.addOrderToCustomer(id, order);
        return customer;
    }
}
