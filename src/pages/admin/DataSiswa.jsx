import {
  Alert,
  AlertTitle,
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import NavbarAdmin from "../../components/admin/Navbar";
import { useState } from "react";
import { useEffect } from "react";

function DataSiswa() {
  // Get data from API
  const [siswa, setSiswa] = useState([]);
  useEffect(() => {
    const fetchata = async () => {
      const response = await fetch("http://localhost:8080/siswa/findAllSiswa");
      const data = await response.json();
      console.log(data);
      setSiswa(data);
    };
    fetchata();
  }, []);

  //   Update data
  const [dialogData, setDialogData] = useState({
    namaSiswa: "",
    alamatSiswa: "",
    kelasId: {
      idKelas: 0,
      namaKelas: "",
    },
  });

  const [open, setOpen] = useState(false);

  const handleClickOpenUpdate = (id) => {
    setOpen(true);
  };
  const handleCloseUpdate = () => {
    setOpen(false);
  };

  const [openAlert, setOpenAlert] = useState(false);

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlertBatal = () => {
    setOpenAlert(false);
  };

  const [openSnackbar, setOpenSnackBar] = useState(false);

  const handleCloseAlertYakin = () => {
    setOpenAlert(false);
    setOpenSnackBar(true);
  };
  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  const [openAddData, setOpenAddData] = useState(false);
  const handleOpenAddData = () => setOpenAddData(true);
  const handleCloseAddData = () => setOpenAddData(false);
  const handleAddData = () => setOpenAddData(false);
  return (
    <>
      <header>
        <NavbarAdmin />
      </header>
      <main className="border-4 mt-32">
        <div>
          <h1 className="text-center font-bold text-xl mt-3 mb-3">
            Data Siswa SMKN 1 Banjar Tahun Ajaran 2023/2024
          </h1>
          <Table className=" w-1/2 border-4">
            <TableHead className="bg-gray-300">
              <TableRow>
                <TableCell align="center" className="w-2">
                  ID Siswa
                </TableCell>
                <TableCell align="left" width={150}>
                  Nama Siswa
                </TableCell>
                <TableCell align="left" width={200}>
                  Alamat Siswa
                </TableCell>
                <TableCell align="left" width={150}>
                  Umur Siswa
                </TableCell>
                <TableCell align="left" width={200}>
                  Kelas
                </TableCell>
                <TableCell align="center" width={200}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {siswa.map((s, i) => (
                <TableRow key={s.idSiswa}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="left">{s.namaSiswa}</TableCell>
                  <TableCell align="left">{s.alamatSiswa}</TableCell>
                  <TableCell align="left">{s.umurSiswa}</TableCell>
                  <TableCell align="left">{s.kelasId.namaKelas}</TableCell>
                  <TableCell align="left" className="!flex flex-col gap-2">
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      className="w-full"
                      onClick={(e) => handleClickOpenUpdate(s.idSiswa)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      className="w-full"
                      onClick={(e) => handleClickOpenAlert()}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className="p-3 col-span-2">
              <TableRow>
                <TableCell colSpan={6}>
                  <div className=" ">
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      className="w-full flex justify-center"
                      onClick={handleOpenAddData}
                    >
                      Add Data
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <Dialog open={open} onClose={handleCloseUpdate}>
            <DialogTitle>Update Data</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="standard-basic"
                label="ID Siswa"
                type="text"
                fullWidth
                variant="standard"
                disabled
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Nama Siswa"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Alamat Siswa"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Umur Siswa"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Kelas"
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseUpdate}>Cancel</Button>
              <Button onClick={handleClickOpenUpdate}>Update</Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={openAlert}
            onClose={handleCloseAlertBatal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Alert severity="error" variant="filled">
              <AlertTitle>Peringatan !!!</AlertTitle>
              <strong>Apakah Anda Yakin Akan Menghapus Data Ini ?</strong>
              <DialogActions>
                <Button onClick={handleCloseAlertBatal} color="inherit">
                  Batal
                </Button>
                <Button
                  onClick={handleCloseAlertYakin}
                  autoFocus
                  color="inherit"
                >
                  Yakin
                </Button>
              </DialogActions>
            </Alert>
          </Dialog>
          <Dialog open={openAddData} onClose={handleOpenAddData}>
            <DialogTitle>Add Data</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="standard-basic"
                label="ID Siswa"
                type="text"
                fullWidth
                variant="standard"
                disabled
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Nama Siswa"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Alamat Siswa"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Umur Siswa"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Kelas"
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseAddData}>Cancel</Button>
              <Button onClick={handleAddData}>Add Data</Button>
            </DialogActions>
          </Dialog>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            onClose={handleCloseSnackBar}
          >
            <Alert
              onClose={handleCloseSnackBar}
              severity="success"
              sx={{ width: "100%" }}
            >
              Data telah terhapus
            </Alert>
          </Snackbar>
        </div>
      </main>
    </>
  );
}

export default DataSiswa;
