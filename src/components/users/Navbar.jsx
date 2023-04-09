import LogoSmkn1Banjar from "../../assets/Logo SMKN 1 Banjar.png";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

function NavbarUser() {
  return (
    <>
      <AppBar className="!font-mono" color="primary">
        <Toolbar disableGutters className="p-5 justify-around">
          <div className=" w-1/4 flex  gap-5">
            <img src={LogoSmkn1Banjar} alt="" className="w-16" />
            <h1 className="font-bold text-3xl my-auto">SMKN 1 BANJAR</h1>
          </div>
          <div className="w-3/4 flex justify-evenly ">
            <Link>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Profil Sekolah
              </Button>
            </Link>
            <Link>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Berita
              </Button>
            </Link>
            <Link>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Ekstrakurikuler
              </Button>
            </Link>
            <Link>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Data Guru
              </Button>
            </Link>{" "}
            <Link>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Prestasi
              </Button>
            </Link>
            <Link>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Kontak
              </Button>
            </Link>
            <Link to="/loginAdmin">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Login
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavbarUser;
