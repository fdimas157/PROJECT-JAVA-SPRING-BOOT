package com.example.sekolah.dto;

import com.example.sekolah.model.Kelas;
import com.example.sekolah.model.Mapel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class KelasMapelDto {
    private Kelas kelasId;
    private Mapel mapelId;
}
