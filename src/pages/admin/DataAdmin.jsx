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
function DataAdmin() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchata = async () => {
      const response = await fetch(
        "http://localhost:8080/user/find-all-username"
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };
    fetchata();
  }, []);

  //   Update data
  const [dialogData, setDialogData] = useState({
    username: "",
    password: "",
  });

  const [open, setOpen] = useState(false);

  const handleCloseUpdate = () => {
    setOpen(false);
  };
  const handleClickUpdate = (id) => {
    setOpen(true);
  };

  const [updateData, setUpdateData] = useState({
    namaGuru: "",
    alamatGuru: "",
    idMapel: 0,
  });

  // Open Alert Add Data
  const [openAlertAddData, setOpenAlertAddData] = useState(false);
  const handleCloseAlertAddData = () => {
    setOpenAlertAddData(false);
  };
  // Add Data
  const handleAddData = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: tampUsername,
        password: tampPassword,
      }),
    }).then(async (response) => {
      if (response.ok) {
        console.log("berhasil");
        setOpenAddData(false);
        setOpenAlertAddData(true);
      }
    });
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
  const [tampPassword, setTampPassword] = useState("");
  const [tampUsername, setTampUsername] = useState("");
  const handleOpenAddData = () => setOpenAddData(true);
  const handleCloseAddData = () => setOpenAddData(false);

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
                  No
                </TableCell>
                <TableCell align="left" width={200}>
                  Username
                </TableCell>
                <TableCell align="left" width={200}>
                  Password
                </TableCell>
                <TableCell align="center" width={200}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((u, i) => (
                <TableRow key={u.id}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="left">{u.username}</TableCell>
                  <TableCell align="left">{u.password}</TableCell>
                  <TableCell align="left" className="!flex flex-col gap-2">
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      className="w-full"
                      onClick={(e) => handleClickUpdate()}
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
                label="Username"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Password"
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseUpdate}>Cancel</Button>
              <Button onClick={handleClickUpdate}>Update</Button>
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
          <Dialog
            open={openAlertAddData}
            onClose={handleCloseAlertBatal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Alert severity="info" variant="filled">
              <AlertTitle>Peringatan !!!</AlertTitle>
              <strong>Data Telah Terkirim Ke Database</strong>
              <DialogActions>
                <Button onClick={handleCloseAlertAddData} color="inherit">
                  Oke
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
                label="Username"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setTampUsername(e.target.value)}
              />
              <TextField
                margin="dense"
                id="standard-basic"
                label="Password"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setTampPassword(e.target.value)}
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

export default DataAdmin;
