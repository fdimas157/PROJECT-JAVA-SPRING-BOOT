package com.example.sekolah.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "mapel")
public class Mapel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_mapel", nullable = false)
    private Integer idMapel;

    @Column(name = "nama_mapel", nullable = false)
    private  String namaMapel;
}
