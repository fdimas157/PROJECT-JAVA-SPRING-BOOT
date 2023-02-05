package com.example.sekolah.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "guru")
public class Guru {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_guru", nullable = false)
    private Integer idGuru;

    @Column(name = "nama_guru", nullable = false)
    private  String namaGuru;

    @Column(name = "alamat_guru", nullable = false)
    private String alamatGuru;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_mapel", referencedColumnName = "id_mapel")
    private Mapel mapelId;
}
