package com.example.sekolah.controller;

import com.example.sekolah.dto.EkskulDto;
import com.example.sekolah.dto.MapelDto;
import com.example.sekolah.model.Ekskul;
import com.example.sekolah.model.Mapel;
import com.example.sekolah.repository.MapelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mapel")
public class MapelController {
    @Autowired
    MapelRepository mapelRepository;

    @GetMapping("/findAllMapel")
    public Object findAll(){
        return mapelRepository.findAll();
    }

    @PostMapping("/addMapel")
    public Object create(@RequestBody MapelDto mapelDto){
        Mapel mapel = new Mapel();
        mapel.setNamaMapel(mapelDto.getNamaMapel());
        return mapelRepository.save(mapel);
    }

    @PutMapping("/updateMapel/{id}")
    public Object update(@PathVariable Integer id, @RequestBody MapelDto mapelDto) {
        Mapel mapel = mapelRepository.findById(id).orElse(null);
        if (mapel == null) {
            return ResponseEntity.badRequest().body("ID Mapel Tidak Ditemukan!");
        }

        mapel.setNamaMapel(mapelDto.getNamaMapel());
        return mapelRepository.save(mapel);
    }

    @DeleteMapping("/deleteMapel/{id}")
    public Object delete(@PathVariable Integer id) {
        Mapel mapel = mapelRepository.findById(id).orElse(null);
        if (mapel == null) {
            return ResponseEntity.badRequest().body("ID Mapel Tidak Ditemukan!");
        }
        mapelRepository.delete(mapel);
        return null;
    }
}
