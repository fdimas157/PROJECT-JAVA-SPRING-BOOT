package com.example.sekolah.payload;

import com.example.sekolah.model.Kelas;
import com.example.sekolah.model.Mapel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PayloadKelasMapel {
    private Integer idKelasMapel;
    private Kelas kelasId;
    private Mapel mapelId;
}
