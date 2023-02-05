package com.example.sekolah.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI openAPI(){
        return new OpenAPI()
                .info(new Info().title("UTS Java Fundamental Lanjutan")
                        .description("CRUD API Ini Dibuat Untuk Memenuhi Ujian Tengah Semester Java Fundamental Lanjutan")
                        .version("v0.0.1")
                        .license(new License().name("Java TM").url("")));
    }
}
