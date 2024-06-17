package com.example.orderservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO { // customer class used to transfer data to the Order service
    // order should only be aware of this class if it gets a customer response
    private Integer id;
    private String name;
    private String email;
    private Integer lastFourDigitsOfCard;
    private Date dob;
    // tells order what a customer object will look like
}

