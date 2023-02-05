package com.example.sekolah.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PayloadKelas {
    private Integer idkelas;
    private String namaKelas;
}
