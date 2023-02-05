package com.example.sekolah.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "kelas")
public class Kelas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_kelas", nullable = false)
    private Integer idKelas;

    @Column(name = "nama_kelas", nullable = false, length = 255)
    private String namaKelas;
}
