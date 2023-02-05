package com.example.sekolah.payload;

import com.example.sekolah.model.Mapel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PayloadGuru {
    private Integer idGuru;
    private String namaGuru;
    private String alamatGuru;
    private Mapel mapelId;
}
