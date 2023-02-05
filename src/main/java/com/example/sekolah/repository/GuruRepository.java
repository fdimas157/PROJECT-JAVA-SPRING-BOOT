package com.example.sekolah.repository;

import com.example.sekolah.model.Guru;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GuruRepository extends JpaRepository<Guru, Integer> {
    @Query("select g.idGuru, g.namaGuru, g.alamatGuru, g.mapelId.idMapel, g.mapelId.namaMapel from Guru g where g.mapelId.idMapel =:mapelId")
    public List<Object> findAllByMapelId(Integer mapelId);
//    List<Guru> findByMapelId_IdMapel(Integer mapelId);
}
