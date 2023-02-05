package com.example.sekolah.repository;

import com.example.sekolah.model.Siswa;
import com.example.sekolah.model.SiswaEkskul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SiswaEkskulRepository extends JpaRepository<SiswaEkskul, Integer> {
    @Query("select se.siswaId.namaSiswa from SiswaEkskul se where se.ekskulId =:ekskulId")
    public List<Siswa> findSiswaByEkskulId(Integer ekskulId);
}
