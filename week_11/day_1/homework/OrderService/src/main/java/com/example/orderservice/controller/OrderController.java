package com.example.orderservice.controller;

import com.example.orderservice.model.Order;
import com.example.orderservice.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{orderId}")
    public Order getOrderById(@PathVariable Integer orderId) {
        return orderService.getOrderById(orderId);
    }

    @PostMapping
    // <?> - wildcard, can be anything
    public ResponseEntity<?> addOrderByACustomer(@RequestBody Order order) {
        if (order.getCustomerId() == null) { // first check to see if there is no customer ID
            return new ResponseEntity<>("Order needs to have a customer id", HttpStatus.BAD_REQUEST); // returns a string in this case
        }

        Order orderMade = orderService.addOrderByACustomer(order); // order object

        if (orderMade != null) { // if there is a matching order
            return new ResponseEntity<>(orderMade, HttpStatus.OK); // return the order and a good status code
        } else {
            return new ResponseEntity<>("Order was not made, customer not found", HttpStatus.NOT_FOUND); // if not found
        }
    }

    @GetMapping("/customers/{customerId}")
    public List<Order> getOrdersByCustomerId(@PathVariable Integer customerId) {
        return orderService.getOrdersByCustomerId(customerId);
    }


}
