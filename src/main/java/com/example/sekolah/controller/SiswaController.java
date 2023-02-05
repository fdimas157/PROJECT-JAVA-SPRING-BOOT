package com.example.sekolah.controller;

import com.example.sekolah.dto.MapelDto;
import com.example.sekolah.dto.SiswaDto;
import com.example.sekolah.model.Mapel;
import com.example.sekolah.model.Siswa;
import com.example.sekolah.repository.SiswaEkskulRepository;
import com.example.sekolah.repository.SiswaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/siswa")
public class SiswaController {
    @Autowired
    SiswaRepository siswaRepository;

    @GetMapping("/findAllSiswa")
    public Object findAll(){
        return siswaRepository.findAll();
    }

    @GetMapping("/findAllNamaSiswaByIdKelas")
    public Object findAll(@RequestParam("kelasId") Integer kelasId){
        return siswaRepository.findNamaSiswaByIdKelas(kelasId);
    }

    @PostMapping("/addSiswa")
    public Object create(@RequestBody SiswaDto siswaDto){
        Siswa siswa = new Siswa();
        siswa.setNamaSiswa(siswaDto.getNamaSiswa());
        siswa.setAlamatSiswa(siswaDto.getAlamatSiswa());
        siswa.setKelasId(siswaDto.getKelasId());
        siswa.setUmurSiswa(siswaDto.getUmurSiswa());
        return siswaRepository.save(siswa);
    }

    @PutMapping("/updateSiswa/{id}")
    public Object update(@PathVariable Integer id, @RequestBody SiswaDto siswaDto) {
        Siswa siswa = siswaRepository.findById(id).orElse(null);
        if (siswa == null) {
            return ResponseEntity.badRequest().body("ID Siswa Tidak Ditemukan!");
        }
        siswa.setNamaSiswa(siswaDto.getNamaSiswa());
        siswa.setAlamatSiswa(siswaDto.getAlamatSiswa());
        siswa.setUmurSiswa(siswaDto.getUmurSiswa());
        siswa.setKelasId(siswaDto.getKelasId());
        return siswaRepository.save(siswa);
    }


    @DeleteMapping("/deleteSiswa/{id}")
    public Object delete(@PathVariable Integer id) {
        Siswa siswa = siswaRepository.findById(id).orElse(null);
        if (siswa == null) {
            return ResponseEntity.badRequest().body("ID Siswa Tidak Ditemukan!");
        }
        siswaRepository.delete(siswa);
        return null;
    }
}
