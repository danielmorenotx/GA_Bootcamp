package com.example.orderservice.service;

import com.example.orderservice.dto.CustomerDTO;
import com.example.orderservice.model.Order;
import com.example.orderservice.repository.IOrderRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Slf4j
@Service
public class OrderService {

    @Autowired
    RestTemplate restTemplate; // can be injected into another class

    @Autowired
    IOrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Integer id) {
        return orderRepository.findById(id).orElse(null);
    }

    public Order addOrder(Order order) {
        Integer customerId = order.getCustomerId();
        //Somehow find a way to check this customer exists
        if (customerId == null) {
            return null;
        }

        // HTTP request to the Customer Service
        // ResponseEntity<> is a class that represents an entire HTTP response
        // Can wrap the DTO with extra info, like a status code
        ResponseEntity<CustomerDTO> customerResponse = restTemplate.getForEntity( // get request to provided URL
                " http://localhost:8080/customers/{customerId}", // calls this endpoint where Customer is being hosted and calls the customer ID
                CustomerDTO.class, // changes whatever response to a CustomerDTO class
                customerId // used as the path variable
        );

        if (customerResponse.getStatusCode().is2xxSuccessful()) { // checks if the call is successful
            CustomerDTO customerDTO = customerResponse.getBody(); // gets the body of the DTO Customer object
            log.info("Customer found with name " + customerDTO.getName()); // logs the Name of the customer
            return orderRepository.save(order); // saves to database
        }

        return null; // will return null if the response is not successful
    }

    public Order addOrderByACustomer( Order order){
        Integer customerId = order.getCustomerId();
        if (customerId == null) {
            log.error("Customer not found");
            return null;
        }
        ResponseEntity<CustomerDTO> customerResponse = restTemplate.getForEntity(
                "http://localhost:8080/customers/{customerId}",
                CustomerDTO.class,
                customerId
        );

        CustomerDTO customerDTO = customerResponse.getBody();

        if (customerResponse.getStatusCode().is2xxSuccessful() && customerDTO != null) {
            log.info("Customer found with name " + customerDTO.getName());
            return orderRepository.save(order);
        } else {
            log.error("Customer not found.");
            return null;
        }
    }

    public List<Order> getOrdersByCustomerId(Integer customerId) {
        return orderRepository.findByCustomerId(customerId);
    }
}