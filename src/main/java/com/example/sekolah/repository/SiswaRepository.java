package com.example.sekolah.repository;

import com.example.sekolah.model.Siswa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SiswaRepository extends JpaRepository<Siswa, Integer> {
    @Query("select s.namaSiswa from Siswa s where s.kelasId.idKelas =:kelasId")
    public List<String> findNamaSiswaByIdKelas(Integer kelasId);

}
