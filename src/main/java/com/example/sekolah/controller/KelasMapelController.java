package com.example.sekolah.controller;

import com.example.sekolah.dto.EkskulDto;
import com.example.sekolah.dto.KelasMapelDto;
import com.example.sekolah.model.Ekskul;
import com.example.sekolah.model.KelasMapel;
import com.example.sekolah.repository.KelasMapelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/kelasMapel")
public class KelasMapelController {
    @Autowired
    KelasMapelRepository kelasMapelRepository;

    @GetMapping("/findAllKelasMapel")
    public Object findAll(){
        return kelasMapelRepository.findAll();
    }
    @PostMapping ("/addKelasMapel")
    public Object create(@RequestBody KelasMapelDto kelasMapelDto){
        KelasMapel kelasMapel = new KelasMapel();
        kelasMapel.setKelasId(kelasMapelDto.getKelasId());
        kelasMapel.setMapelId(kelasMapelDto.getMapelId());
        return kelasMapelRepository.save(kelasMapel);
    }

    @PutMapping("/updateKelasMapel/{id}")
    public Object update(@PathVariable Integer id, @RequestBody KelasMapelDto kelasMapelDto) {
        KelasMapel kelasMapel = kelasMapelRepository.findById(id).orElse(null);
        if (kelasMapel == null) {
            return ResponseEntity.badRequest().body("ID Kelas Mapel Tidak Ditemukan!");
        }
        kelasMapel.setMapelId(kelasMapelDto.getMapelId());
        kelasMapel.setKelasId(kelasMapelDto.getKelasId());
        return kelasMapelRepository.save(kelasMapel);
    }

    @DeleteMapping("/deleteKelasMapel/{id}")
    public Object delete(@PathVariable Integer id) {
        KelasMapel kelasMapel = kelasMapelRepository.findById(id).orElse(null);
        if (kelasMapel == null) {
            return ResponseEntity.badRequest().body("ID Kelas Mapel Tidak Ditemukan!");
        }
        kelasMapelRepository.delete(kelasMapel);
        return null;
    }
}
