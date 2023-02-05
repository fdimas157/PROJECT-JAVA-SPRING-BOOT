package com.example.sekolah.payload;

import com.example.sekolah.model.Kelas;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PayloadSiswa {
    private Integer idSiswa;
    private String namaSiswa;
    private String alamatSiswa;
    private Kelas kelasId;
    private Integer umurSiswa;
}
