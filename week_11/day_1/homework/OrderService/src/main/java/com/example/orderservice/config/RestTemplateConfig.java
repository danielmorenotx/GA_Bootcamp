package com.example.orderservice.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration // Spring looks inside this on start up and looks for @Bean
public class RestTemplateConfig {
    @Bean // creates a bean of whatever the method returns
    public RestTemplate restTemplate() { // can now be autowired
        return new RestTemplate();
    }
}
