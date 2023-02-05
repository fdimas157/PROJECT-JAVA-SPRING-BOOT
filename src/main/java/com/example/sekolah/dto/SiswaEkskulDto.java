package com.example.sekolah.dto;

import com.example.sekolah.model.Ekskul;
import com.example.sekolah.model.Siswa;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SiswaEkskulDto {
    private Siswa siswaId;
    private Ekskul ekskulId;
}
