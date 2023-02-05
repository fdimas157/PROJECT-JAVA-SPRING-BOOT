package com.example.sekolah.controller;

import com.example.sekolah.dto.KelasDto;
import com.example.sekolah.model.Kelas;
import com.example.sekolah.repository.KelasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/kelas")
public class KelasController {
    @Autowired
    KelasRepository kelasRepository;

    @GetMapping("/findAllKelas")
    public Object findALl(){
        return kelasRepository.findAll();
    }

    @PostMapping("/addKelas")
    public Object create(@RequestBody KelasDto kelasDto){
        Kelas kelas = new Kelas();
        kelas.setNamaKelas(kelasDto.getNamaKelas());
        return kelasRepository.save(kelas);
    }

    @PutMapping("/updateKelas/{id}")
    public Object update(@PathVariable Integer id, @RequestBody KelasDto kelasDto) {
        Kelas kelas = kelasRepository.findById(id).orElse(null);
        if (kelas == null) {
            return ResponseEntity.badRequest().body("ID Kelas Tidak Ditemukan !");
        }

        kelas.setNamaKelas(kelasDto.getNamaKelas());
        return kelasRepository.save(kelas);
    }

    @DeleteMapping("/deleteKelas/{id}")
    public Object delete(@PathVariable Integer id) {
        Kelas kelas = kelasRepository.findById(id).orElse(null);
        if (kelas == null) {
            return ResponseEntity.badRequest().body("ID Kelas Tidak Ditemukan !");
        }
        kelasRepository.delete(kelas);
        return null;
    }
}
