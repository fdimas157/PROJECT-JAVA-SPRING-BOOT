package com.example.sekolah.controller;

import com.example.sekolah.dto.GuruDto;
import com.example.sekolah.model.Guru;
import com.example.sekolah.repository.GuruRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guru")
public class GuruController {
    @Autowired
    GuruRepository guruRepository;

    @GetMapping("/findAllGuru")
    public Object findAll(){
        return guruRepository.findAll();
    }

    @GetMapping("/findAllByMapelId")
    public Object findAll(@RequestParam("mapelId") Integer mapelId){
        return guruRepository.findAllByMapelId(mapelId);
    }

    @PostMapping("/addGuru")
    public Object create(@RequestBody GuruDto guruDto){
        Guru guru = new Guru();
        guru.setNamaGuru(guruDto.getNamaGuru());
        guru.setAlamatGuru(guruDto.getAlamatGuru());
        guru.setMapelId(guruDto.getMapelId());
        return guruRepository.save(guru);
    }

    @PutMapping("/updateGuru/{id}")
    public Object update(@PathVariable Integer id, @RequestBody GuruDto guruDto) {
        Guru guru = guruRepository.findById(id).orElse(null);
        if (guru == null) {
            return ResponseEntity.badRequest().body("ID Guru Tidak Ditemukan !");
        }
        guru.setNamaGuru(guruDto.getNamaGuru());
        guru.setAlamatGuru(guruDto.getAlamatGuru());
        guru.setMapelId(guruDto.getMapelId());
        return guruRepository.save(guru);
    }

    @DeleteMapping("/deleteGuru/{id}")
    public Object delete(@PathVariable Integer id) {
        Guru guru = guruRepository.findById(id).orElse(null);
        if (guru == null) {
            return ResponseEntity.badRequest().body("ID Guru Tidak Ditemukan !");
        }
        guruRepository.delete(guru);
        return null;
    }
}
