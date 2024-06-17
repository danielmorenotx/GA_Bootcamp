package com.example.orderservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "CustomerOrder") // if this is not present, it sets the class name as the table name
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    private String orderDetails;
    private Integer customerId;

    // if something is an @Entity, you cannot save a list because it's trying to save a list of things in one row
    // the @ElementCollection will allow us to save a list as an attribute (row)
    // use when there is a ManyToMany relationship
    @ElementCollection
    private List<Integer> productId; // creates another table called order_product_id
    // not a join table, table has the order ID with all product IDs
}
