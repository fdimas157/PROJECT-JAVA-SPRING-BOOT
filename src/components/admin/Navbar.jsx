import LogoSmkn1Banjar from "../../assets/Logo SMKN 1 Banjar.png";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

function NavbarAdmin() {
  return (
    <>
      <AppBar className="!font-mono" color="primary">
        <Toolbar disableGutters className="p-5 justify-around">
          <div className=" w-1/4 flex  gap-5">
            <img src={LogoSmkn1Banjar} alt="" className="w-16" />
            <h1 className="font-bold text-3xl my-auto">SMKN 1 BANJAR</h1>
          </div>
          <div className="w-3/4 flex justify-evenly ">
            <Link to="/dataGuru">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Data Guru
              </Button>
            </Link>
            <Link to="/dataSiswa">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Data Siswa
              </Button>
            </Link>
            <Link to="/dataKelas">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Data Kelas
              </Button>
            </Link>
            <Link to="/dataMapel">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Data Mata Pelajaran
              </Button>
            </Link>
            <Link to="/dataAdmin">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Data Admin
              </Button>
            </Link>
            <Link to="/">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Log Out
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavbarAdmin;
