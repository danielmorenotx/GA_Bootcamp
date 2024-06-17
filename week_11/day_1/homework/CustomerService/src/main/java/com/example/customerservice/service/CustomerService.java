package com.example.customerservice.service;

import com.example.customerservice.dto.OrderDTO;
import com.example.customerservice.model.Customer;
import com.example.customerservice.repository.ICustomerRepository;
import jakarta.persistence.criteria.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    ICustomerRepository customerRepository;

    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Integer id) {
        return customerRepository.findById(id) // will return a customer
                .orElse(null); // or will return a null
    }

    public List<OrderDTO> getAllOrdersByCustomerId(Integer id) {
        ResponseEntity<OrderDTO[]> responseEntity = restTemplate.getForEntity(
                "http://localhost:8081/orders/customers/{id}", // port for the orders
                OrderDTO[].class, // turns it into a DTO array
                id // fills with the ID
        );

        if (responseEntity.getStatusCode().is2xxSuccessful()) { // check if successful
            OrderDTO[] orderDTOS = responseEntity.getBody(); // get the body

            if(orderDTOS != null) { // if not null
                return Arrays.asList(orderDTOS);
            } // return the list
        }

        return null;
    }
}
