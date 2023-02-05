package com.example.sekolah.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "kelas_mapel")
public class KelasMapel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idKelasMapel;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_kelas", referencedColumnName = "id_kelas")
    private Kelas kelasId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_mapel", referencedColumnName = "id_mapel")
    private Mapel MapelId;
}
