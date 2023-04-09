import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import HomeSmkn1Banjar from "../../assets/Home SMKN 1 Banjar.jpg";
import LogoSmkn1Banjar from "../../assets/Logo SMKN 1 Banjar.png";
import Kegiatan1 from "../../assets/kegiaatan1.jpeg";
import Kegiatan2 from "../../assets/kegiaatan2.jpeg";
import Kegiatan3 from "../../assets/kegiaatan3.jpeg";
import Kegiatan4 from "../../assets/kegiaatan4.jpeg";
import Kegiatan5 from "../../assets/kegiaatan5.jpeg";
import Kegiatan6 from "../../assets/kegiaatan6.jpeg";
import Futsal from "../../assets/futsal.png";
import Basket from "../../assets/basket.png";
import Rohis from "../../assets/rohis.png";
import SepakBola from "../../assets/sepak bola.png";
import BolaVoli from "../../assets/bola voli.png";
import Badminton from "../../assets/badminton.png";
import Pramuka from "../../assets/pramuka.png";
import TenisMeja from "../../assets/tenis meja.png";
import Prestasi1 from "../../assets/p1.jpeg";
import Prestasi2 from "../../assets/p2.jpeg";
import Prestasi3 from "../../assets/p3.jpeg";
import Prestasi4 from "../../assets/p4.jpeg";
import Prestasi5 from "../../assets/p5.jpeg";
import { AppBar, Button, Toolbar } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function HomePage() {
  const [ekskul, setEkskul] = useState([]);
  useEffect(() => {
    const fetchata = async () => {
      const response = await fetch(
        "http://localhost:8080/siswaEkskul/findAllSiswaEkskul"
      );
      const data = await response.json();
      console.log(data);
      setEkskul(data);
    };
    fetchata();
  }, []);

  const [guru, setGuru] = useState([]);
  useEffect(() => {
    const fetchata = async () => {
      const response = await fetch("http://localhost:8080/guru/findAllGuru");
      const data = await response.json();
      console.log(data);
      setGuru(data);
    };
    fetchata();
  }, []);
  return (
    <>
      <header className="static">
        <AppBar className="!font-mono" color="primary">
          <Toolbar disableGutters className="p-5 justify-around">
            <div className=" w-1/4 flex  gap-5">
              <img src={LogoSmkn1Banjar} alt="" className="w-16" />
              <h1 className="font-bold text-3xl my-auto">SMKN 1 BANJAR</h1>
            </div>
            <div className="w-3/4 flex justify-evenly ">
              <Button
                href="#profil-sekolah"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Profil Sekolah
              </Button>
              <Button
                href="#berita"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Berita
              </Button>
              <Button
                href="#ekskul"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Ekstrakurikuler
              </Button>
              <Button
                href="#data-guru"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Data Guru
              </Button>
              <Button
                href="#prestasi"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Prestasi
              </Button>
              <Link to="/loginAdmin">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Login
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </header>
      <main className="p-5">
        <div id="home-first">
          <img src={HomeSmkn1Banjar} alt="" className="w-full h-1/2 mt-28" />
        </div>
        <div id="profil-sekolah">
          <div className="mt-10">
            <div>
              <h1 className="text-3xl text-center">
                PROFIL SMK NEGERI 1 BANJAR
              </h1>
              <div className="flex gap-3 -mt-9">
                <span className="text-6xl w-1/2 text-right text-blue-500">
                  __
                </span>
                <span className="text-6xl w-1/2 text-left  text-blue-500">
                  __
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-wrap p-10  mt-8 border-4 border-dashed border-blue-500">
            <h1 className="text-2xl text-center ml-3">Identitas Sekolah</h1>
            <div className="w-full  p-2 rounded-xl mt-5 flex flex-wrap gap-5">
              <TextField
                // disabled
                id="outlined-disabled"
                label="Nama Sekolah"
                defaultValue="SMK Negeri 1 Banjar"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
              <TextField
                // disabled
                id="outlined-disabled"
                label="Alamat Sekolah"
                defaultValue="Jl. KH Mustopa Lingk. Parung Lesang RT 05 RW 10, Banjar, Kec. Banjar, Kota Banjar Prov. Jawa Barat"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
              <TextField
                // disabled
                id="outlined-disabled"
                label="Telepon Sekolah"
                defaultValue="(0265) 741722"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
              <TextField
                // disabled
                id="outlined-disabled"
                label="Fax Sekolah"
                defaultValue="(0265) 744860"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
              <TextField
                // disabled
                id="outlined-disabled"
                label="Email Sekolah"
                defaultValue="smkn1banjar@gmail.com"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
              <TextField
                // disabled
                id="outlined-disabled"
                label="Kelurahan"
                defaultValue="Kelurahan Banjar"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
              <TextField
                // disabled
                id="outlined-disabled"
                label="Kecamatan"
                defaultValue="Kecamatan Banjar"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
              <TextField
                // disabled
                id="outlined-disabled"
                label="Kota"
                defaultValue=" Kota Banjar"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
              <TextField
                // disabled
                id="outlined-disabled"
                label="NSS/NDS"
                defaultValue="341022703005"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
              <TextField
                // disabled
                id="outlined-disabled"
                label="NPSN"
                defaultValue="20225282"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
              <TextField
                // disabled
                id="outlined-disabled"
                label="Izin Pendirian"
                defaultValue="No. 1/UKK.03/1969 Tanggal 2 Januari 1969"
                size="medium"
                color="info"
                focused
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div id="berita">
          <div className="mt-10">
            <div>
              <h1 className="text-3xl text-center">BERITA TERBARU</h1>
              <div className="flex gap-3 -mt-9">
                <span className="text-6xl w-1/2 text-right text-blue-500">
                  __
                </span>
                <span className="text-6xl w-1/2 text-left  text-blue-500">
                  __
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap mt-10 p-5  justify-between gap-10">
            <Card sx={{ maxWidth: 345 }} className="">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Kegiatan2}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Persiapan Ujian, Kelas XII Mengikuti Doa Bersama
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-justify"
                  >
                    Senin 10 April 2023. Ratusan siswa kelas XII SMK Negeri 1
                    Banjar mengikuti agenda Doa Bersama menyiapkan diri memasuki
                    Ujian Kelulusan dan Masuk Perguruan Tinggi
                  </Typography>
                  <Button>READ MORE...</Button>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Kegiatan1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Deteksi Penyakit Sejak Dini Dengan Skrinning PTM
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-justify"
                  >
                    Menjadi salah satu program dari Dinas Kesehatan, Puskesmas
                    Wirobrajan melaksanakan Program Skrinning Penyakit Tidak
                    Menular (PTM) untuk...
                  </Typography>
                  <Button>READ MORE...</Button>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Kegiatan3}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MAN Banjar Berkunjung Ke SMK Negeri 1 Banjar
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-justify"
                  >
                    Kamis, 26 Maret 2023, Teladan menjadi sasaran kunjungan
                    Bapak/ Ibu Guru MAN Banjar. Teladan ditunjuk lantaran
                    dikenal sebagai salah satu sekolah...
                  </Typography>
                  <Button>READ MORE...</Button>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Kegiatan4}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Persiapkan UTBK Melalui Sosialisasi TPS
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-justify"
                  >
                    Demi mempersiapkan siswa kelas XII di Seleksi Nasional
                    Berbasis Tes (SNBT), SMK Negeri 1 Banjar mengundang dua
                    narasumber yakni; Dr. Emi Zulaifah, ...
                  </Typography>
                  <Button>READ MORE...</Button>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Kegiatan5}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pemotretan Pasfoto Untuk Siswa Kelas XII
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-justify"
                  >
                    Selasa, 17 Maret 2023 SMK Negeri 1 Banjar mengadakan
                    pemotretan pasfoto untuk siswa kelas XII. Pasfoto nantinya
                    digunakan untuk kelengkapan...
                  </Typography>
                  <Button>READ MORE...</Button>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Kegiatan6}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Teladan Eksis Di Edu Talk TVRI #1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-justify"
                  >
                    Alifais Farrel Ramdhani, alumni Teladan 63 menjadi bintang
                    tamu pertama dalam Podcast bertajuk Edu Talk yang
                    ditayangkan di Youtube TVRI pada 27 Maret
                  </Typography>
                  <Button>READ MORE...</Button>
                </CardContent>
              </CardActionArea>
            </Card>
            <div className="w-1/3"> </div>
            <div>
              <Button variant="outlined">Tampilkan lebih banyak</Button>
            </div>
            <div className="w-1/3"> </div>
          </div>
        </div>
        <div id="ekskul">
          <div className="mt-10">
            <div>
              <h1 className="text-3xl text-center">EKSTRAKURIKULER</h1>
              <div className="flex gap-3 -mt-9">
                <span className="text-6xl w-1/2 text-right text-blue-500">
                  __
                </span>
                <span className="text-6xl w-1/2 text-left  text-blue-500">
                  __
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap mt-10 p-5 justify-evenly gap-10">
            <Button
              color="info"
              variant="contained"
              className="w-60 h-32 flex gap-8"
            >
              <img src={Futsal} alt="" />
              <h1 className="text-2xl">Futsal</h1>
            </Button>
            <Button
              color="error"
              variant="contained"
              className="w-60 h-32 flex gap-8"
            >
              <img src={Basket} alt="" />
              <h1 className="text-2xl">Basket</h1>
            </Button>
            <Button
              color="success"
              variant="contained"
              className="w-60 h-32 flex gap-8"
            >
              <img src={Rohis} alt="" />
              <h1 className="text-2xl">Rohani Islam</h1>
            </Button>
            <Button
              color="warning"
              variant="contained"
              className="w-60 h-32 flex gap-8"
            >
              <img src={SepakBola} alt="" />
              <h1 className="text-2xl">Sepak Bola</h1>
            </Button>
            <Button
              color="success"
              variant="contained"
              className="w-60 h-32 flex gap-8"
            >
              <img src={BolaVoli} alt="" />
              <h1 className="text-2xl">Bola Voli</h1>
            </Button>
            <Button
              color="warning"
              variant="contained"
              className="w-60 h-32 flex gap-8"
            >
              <img src={Badminton} alt="" />
              <h1 className="text-2xl">Bulu Tangkis</h1>
            </Button>
            <Button
              color="info"
              variant="contained"
              className="w-60 h-32 flex gap-8"
            >
              <img src={Pramuka} alt="" />
              <h1 className="text-2xl">Pramuka</h1>
            </Button>
            <Button
              color="error"
              variant="contained"
              className="w-60 h-32 flex gap-8"
            >
              <img src={TenisMeja} alt="" />
              <h1 className="text-2xl">Tenis Meja</h1>
            </Button>
            <div>
              <Table className=" w-1/2 border-4">
                <TableHead className="bg-gray-300">
                  <TableRow>
                    <TableCell align="center" className="w-2">
                      No
                    </TableCell>
                    <TableCell align="left" width={200}>
                      Nama Siswa
                    </TableCell>
                    <TableCell align="left" width={200}>
                      Alamat Siswa
                    </TableCell>
                    <TableCell align="left" width={200}>
                      Umur Siswa
                    </TableCell>
                    <TableCell align="left" width={200}>
                      Kelas
                    </TableCell>
                    <TableCell align="left" width={200}>
                      Ekstrakurikuler
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ekskul.map((k, i) => (
                    <TableRow key={k.idSiswaEkskul}>
                      <TableCell align="center">{i + 1}</TableCell>
                      <TableCell align="left">{k.siswaId.namaSiswa}</TableCell>
                      <TableCell align="left">
                        {k.siswaId.alamatSiswa}
                      </TableCell>
                      <TableCell align="left">{k.siswaId.umurSiswa}</TableCell>
                      <TableCell align="left">
                        {k.siswaId.kelasId.namaKelas}
                      </TableCell>
                      <TableCell align="left">
                        {k.ekskulId.namaEkskul}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter className="p-3">
                  <TableRow>
                    <TableCell colSpan={6}>
                      <h1 className="text-center text-md">
                        Data Siswa Mengikuti Ekstrakurikuler
                      </h1>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
        <div id="data-guru">
          <div className="mt-10">
            <div>
              <h1 className="text-3xl text-center">DATA GURU</h1>
              <div className="flex gap-3 -mt-9">
                <span className="text-6xl w-1/2 text-right text-blue-500">
                  __
                </span>
                <span className="text-6xl w-1/2 text-left  text-blue-500">
                  __
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Table className=" w-1/2 border-4">
              <TableHead className="bg-gray-300">
                <TableRow>
                  <TableCell align="center" className="w-2">
                    ID Guru
                  </TableCell>
                  <TableCell align="left" width={200}>
                    Nama Guru
                  </TableCell>
                  <TableCell align="left" width={200}>
                    Alamat Guru
                  </TableCell>
                  <TableCell align="left" width={200}>
                    Mata Pelajaran
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {guru.map((g, i) => (
                  <TableRow key={g.idGuru}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell align="left">{g.namaGuru}</TableCell>
                    <TableCell align="left">{g.alamatGuru}</TableCell>
                    <TableCell align="left">{g.mapelId.namaMapel}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter className="p-3 col-span-2">
                <TableRow>
                  <TableCell colSpan={5}>
                    <h1 className="text-center text-md">
                      Data Guru Yang Ada Di SMK Negeri 1 Banjar
                    </h1>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
        <div id="prestasi">
          <div className="mt-10">
            <div>
              <h1 className="text-3xl text-center">PRESTASI</h1>
              <div className="flex gap-3 -mt-9">
                <span className="text-6xl w-1/2 text-right text-blue-500">
                  __
                </span>
                <span className="text-6xl w-1/2 text-left  text-blue-500">
                  __
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-between flex-wrap gap-10">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea className="flex flex-row">
                <CardMedia component="img" height="140" image={Prestasi1} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Juara Harapan 1 Olimpiade Aktuaria ASiQ 2022
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Juara Harapan 1 dalam Olimpiade Aktuaria ASiQ 2022 yang
                    diselenggarakan oleh Himpunan Mahasiswa Ilmu Aktuaria
                    Universitas Gadjah Mada.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea className="flex flex-row">
                <CardMedia component="img" height="140" image={Prestasi2} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Juara 2 Yogyakarta Basketball SHS Tournament
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tim basket putra SMK Negeri 1 Banjar mendapatkan Juara 2
                    dalam ajang perlombaan Banajr Basketball SHS Tournament yang
                    diselenggarakan oleh Kemenpora dan ITB Bandung.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea className="flex flex-row">
                <CardMedia component="img" height="140" image={Prestasi3} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Juara 2 Lomba Esai Tayuban Perencana #4 "Urai Sandhyakala"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Memperoleh juara 2 pada Lomba Esai Tayuban Perencana #4
                    "Urai Sandhyakala" yang diselenggarakan oleh Perencanaan
                    Wilayah Kota Universitas Gadjah Mada
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <div className=" w-full flex justify-around">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea className="flex flex-row">
                  <CardMedia
                    component="img"
                    height="140"
                    image={Prestasi4}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Juara 1 Lomba Menulis Esai Demokrasi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lomba diselenggarakan oleh Badan Kesatuan Bangsa dan
                      Politik Kota Banjar
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>{" "}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea className="flex flex-row">
                  <CardMedia
                    component="img"
                    height="140"
                    image={Prestasi5}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Juara 2 Lomba Vlog Sejarah Dialog dan Jelajah Sejarah
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Juara Harapan 1 dalam Olimpiade Aktuaria ASiQ 2022 yang
                      diselenggarakan oleh Himpunan Mahasiswa Ilmu Aktuaria
                      Universitas Gadjah Mada.Mendapatkan Juara 2 dalam ajang
                      perlombaan Vlog Sejarah Dialog dan Jelajah Sejarah yang
                      diselenggarakan oleh Dinas Kebudayaan Kota Banjar
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
