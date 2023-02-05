package com.example.sekolah.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "siswa_ekskul")
public class SiswaEkskul {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSiswaEkskul;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_siswa", referencedColumnName = "id_siswa")
    private Siswa siswaId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_ekskul", referencedColumnName = "id_ekskul")
    private Ekskul ekskulId;
}
