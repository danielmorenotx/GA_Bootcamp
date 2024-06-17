package com.example.customerservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// This will communicate with the order service
@Data
@NoArgsConstructor
@AllArgsConstructor
// do not create an @Entity of order in a DTO
public class OrderDTO {

    private Integer id;
    private String orderDetails;
    private Integer customerId;
}
