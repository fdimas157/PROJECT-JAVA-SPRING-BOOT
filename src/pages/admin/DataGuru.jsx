import {
  Alert,
  AlertTitle,
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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

function DataGuru() {
  // Get data from API
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

  //   Get Data Mata Pelajaran
  const [mapel, setMapel] = useState([]);
  useEffect(() => {
    const fetchata = async () => {
      const responses = await fetch("http://localhost:8080/mapel/findAllMapel");
      const datas = await responses.json();
      console.log(datas);
      setMapel(datas);
    };
    fetchata();
  }, []);

  //   Update data
  const [dialogData, setDialogData] = useState({
    idGuru: "",
    namaGuru: "",
    alamatGuru: "",
    idMapel: 0,
  });

  const [open, setOpen] = useState(false);

  const handleClickOpenUpdate = (id) => {
    fetch(`http://localhost:8080/guru/${id}`)
      .then((response) => response.json())
      .then((res) => setDialogData(res))
      .then(setOpen(true));
    // console.log(dialogData);
  };

  useEffect(() => {
    setDialogData();
  }, []);

  const handleCloseUpdate = () => {
    setOpen(false);
  };

  const [updateData, setUpdateData] = useState({
    namaGuru: "",
    alamatGuru: "",
    idMapel: 0,
  });
  useEffect(() => {
    setUpdateData();
  }, []);
  const handleClickUpdate = (id) => {};

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
  const [tampNamaGuru, setTampNamaGuru] = useState("");
  const [tampAlamatGuru, setTampAlamatGuru] = useState("");
  const [tampIdMapel, setTampIdMapel] = useState(0);
  const handleOpenAddData = () => setOpenAddData(true);
  const handleCloseAddData = () => setOpenAddData(false);
  const handleAddData = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/guru/addGuru", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        namaGuru: "sassas",
        alamatGuru: "asasa",
        idMapel: 1,
      }),
    }).then(async (response) => {
      if (response.ok) {
        console.log("berhasil");
        setOpenAddData(false);
      }
    });
  };

  const [pilMapel, setPilMapel] = useState();
  return (
    <>
      <header>
        <NavbarAdmin />
      </header>
      <main className="border-4 mt-32">
        <div>
          <h1 className="text-center font-bold text-xl mt-3 mb-3">
            Data Guru SMKN 1 Banjar Tahun Ajaran 2023/2024
          </h1>
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
                <TableCell align="center" width={200}>
                  Action
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
                  <TableCell align="left" className="!flex flex-col gap-2">
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      className="w-full"
                      onClick={(e) => handleClickOpenUpdate(g.idGuru)}
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
                <TableCell colSpan={5}>
                  <div className=" ">
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      className="w-full flex justify-center"
                      onClick={() => handleOpenAddData()}
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
                label="ID Guru"
                type="text"
                fullWidth
                variant="standard"
                value={dialogData?.idGuru}
                disabled
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Nama Guru"
                type="text"
                fullWidth
                variant="standard"
                value={dialogData?.namaGuru}
                onChange={(e) => {
                  setDialogData({ ...dialogData, namaGuru: e.target.value });
                }}
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Alamat Guru"
                type="text"
                fullWidth
                variant="standard"
                value={dialogData?.alamatGuru}
                onChange={(e) => {
                  setDialogData({ ...dialogData, alamatGuru: e.target.value });
                }}
              />
              <FormControl fullWidth className="mt-10">
                <InputLabel id="demo-simple-select-label" className="mt-3">
                  Mata Pelajaran
                </InputLabel>
                <Select
                  className="mt-10"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="standard"
                  value={dialogData?.idMapel}
                  label="Mata Pelajaran"
                  onChange={(e) => {
                    setPilMapel(e.target.value);
                  }}
                >
                  {mapel.map((m) => (
                    <MenuItem value={m.idMapel}>{m.namaMapel}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseUpdate}>Cancel</Button>
              <Button onClick={handleClickUpdate()}>Update</Button>
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
                label="ID Guru"
                type="text"
                fullWidth
                variant="standard"
                value={dialogData?.idGuru}
                disabled
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Nama Guru"
                type="text"
                fullWidth
                variant="standard"
                value={dialogData?.namaGuru}
                onChange={(e) => {
                  setTampNamaGuru(e.target.value);
                }}
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Alamat Guru"
                type="text"
                fullWidth
                variant="standard"
                value={dialogData?.alamatGuru}
                onChange={(e) => {
                  setTampAlamatGuru(e.target.value);
                }}
              />
              <FormControl fullWidth className="mt-10">
                <InputLabel id="demo-simple-select-label" className="mt-3">
                  Mata Pelajaran
                </InputLabel>
                <Select
                  className="mt-10"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="standard"
                  label="Mata Pelajaran"
                  onChange={(e) => {
                    setTampIdMapel(e.target.value);
                  }}
                >
                  {mapel.map((m) => (
                    <MenuItem value={m.idMapel}>{m.namaMapel}</MenuItem>
                  ))}
                </Select>
              </FormControl>
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

export default DataGuru;
