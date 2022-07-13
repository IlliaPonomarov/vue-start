package com.vue.spring.test.vuejs_springboot;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/nasa")
public class MainController {


    @GetMapping
    public String getNasaApi(){
        RestTemplate restTemplate = new RestTemplate();

        int t = (int) 12e9;
        return restTemplate.getForObject(
                "https://weatherapi-com.p.rapidapi.com/future.json",
                String.class
        );
    }


}
