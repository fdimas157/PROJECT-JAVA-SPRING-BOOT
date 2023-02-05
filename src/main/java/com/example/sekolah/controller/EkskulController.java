package com.example.sekolah.controller;

import com.example.sekolah.dto.EkskulDto;
import com.example.sekolah.model.Ekskul;
import com.example.sekolah.repository.EkskulRepository;
import com.example.sekolah.repository.KelasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ekskul")
public class EkskulController {
    @Autowired
    KelasRepository kelasRepository;
    @Autowired
    private EkskulRepository ekskulRepository;

    @GetMapping("/findAllEkskul")
    public Object findAll(){
        return ekskulRepository.findAll();
    }

    @PostMapping("/addEkskul")
    public Object create(@RequestBody EkskulDto ekskulDto){
        Ekskul ekskul = new Ekskul();
        ekskul.setNamaEkskul(ekskulDto.getNamaEkskul());
        return ekskulRepository.save(ekskul);
    }

    @PutMapping("/updateEkskul/{id}")
    public Object update(@PathVariable Integer id, @RequestBody EkskulDto ekskulDto) {
        Ekskul ekskul = ekskulRepository.findById(id).orElse(null);
        if (ekskul == null) {
            return ResponseEntity.badRequest().body("ID Ekskul Tidak Ditemukan!");
        }

        ekskul.setNamaEkskul(ekskulDto.getNamaEkskul());
        return ekskulRepository.save(ekskul);
    }

    @DeleteMapping("/deleteEkskul/{id}")
    public Object delete(@PathVariable Integer id) {
        Ekskul ekskul = ekskulRepository.findById(id).orElse(null);
        if (ekskul == null) {
            return ResponseEntity.badRequest().body("ID Ekskul Tidak Ditemukan!");
        }
        ekskulRepository.delete(ekskul);
        return null;
    }
}
