package com.example.sekolah.dto;

import com.example.sekolah.model.Mapel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GuruDto {
    private String namaGuru;
    private String alamatGuru;
    private Mapel mapelId;
}
