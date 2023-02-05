package com.example.sekolah.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "siswa")
public class Siswa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_siswa", nullable = false)
    private Integer idSiswa;

    @Column(name = "nama_siswa", nullable = false)
    private  String namaSiswa;

    @Column(name = "alamat_siswa", nullable = false)
    private String alamatSiswa;

    @Column(name = "umur_siswa", nullable = false)
    private Integer umurSiswa;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_kelas", referencedColumnName = "id_kelas")
    private Kelas kelasId;
}
