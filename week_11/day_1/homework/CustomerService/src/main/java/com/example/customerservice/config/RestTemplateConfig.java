package com.example.customerservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration //class-level annotation that indicates that a class declares one or more @Bean methods and may be processed by the Spring container to generate bean definitions and service requests for those beans at runtime.
public class RestTemplateConfig {

    @Bean // method level, inject into components to make HTTP calls
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
