package com.example.sekolah.controller;

import com.example.sekolah.dto.KelasMapelDto;
import com.example.sekolah.dto.SiswaEkskulDto;
import com.example.sekolah.model.KelasMapel;
import com.example.sekolah.model.SiswaEkskul;
import com.example.sekolah.repository.SiswaEkskulRepository;
import com.example.sekolah.repository.SiswaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/siswaEkskul")
public class SiswaEkskulController {
    @Autowired
    SiswaEkskulRepository siswaEkskulRepository;

    @GetMapping("/findAllSiswaEkskul")
    public Object findAll(){
        return siswaEkskulRepository.findAll();
    }

    @PostMapping("/addSiswaEkskul")
    public Object create(@RequestBody SiswaEkskulDto siswaEkskulDto){
        SiswaEkskul siswaEkskul = new SiswaEkskul();
        siswaEkskul.setSiswaId(siswaEkskulDto.getSiswaId());
        siswaEkskul.setEkskulId(siswaEkskulDto.getEkskulId());
        return siswaEkskulRepository.save(siswaEkskul);
    }

    @PutMapping("/updateSiswaEkskul/{id}")
    public Object update(@PathVariable Integer id, @RequestBody SiswaEkskulDto siswaEkskulDto) {
        SiswaEkskul siswaEkskul = siswaEkskulRepository.findById(id).orElse(null);
        if (siswaEkskul == null) {
            return ResponseEntity.badRequest().body("ID Siswa Ekskul Tidak Ditemukan!");
        }        siswaEkskul.setEkskulId(siswaEkskulDto.getEkskulId());
        siswaEkskul.setSiswaId(siswaEkskulDto.getSiswaId());
        return siswaEkskulRepository.save(siswaEkskul);
    }

    @DeleteMapping("/deleteSiswaEkskul/{id}")
    public Object delete(@PathVariable Integer id) {
        SiswaEkskul siswaEkskul = siswaEkskulRepository.findById(id).orElse(null);
        if (siswaEkskul == null) {
            return ResponseEntity.badRequest().body("ID Siswa Ekskul Tidak Ditemukan!");
        }
        siswaEkskulRepository.delete(siswaEkskul);
        return null;
    }
}
