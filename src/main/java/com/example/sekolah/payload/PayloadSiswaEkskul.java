package com.example.sekolah.payload;

import com.example.sekolah.model.Ekskul;
import com.example.sekolah.model.Siswa;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PayloadSiswaEkskul {
    private Integer idSiswaEkskul;
    private Siswa siswaId;
    private Ekskul ekskulId;
}
