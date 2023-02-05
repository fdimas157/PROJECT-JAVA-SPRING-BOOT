package com.example.sekolah.config;

import com.example.sekolah.payload.DaftarGuru;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {
    @Bean
    public DaftarGuru daftarGuru(){
        return new DaftarGuru();
    }
}
