package com.example.sekolah.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "check")
public class ujiCoba {
    @GetMapping(value = "checkApi")
    public String checkAPI(){
        return "Hello Word !!!";
    }
}
