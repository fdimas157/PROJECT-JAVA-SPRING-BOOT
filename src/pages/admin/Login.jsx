import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BackGroundSMK from "../../assets/Background SMK 1 Banjar.jpg";
import CopyRight from "../../components/admin/CopyRight";
import { Dialog, DialogActions, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const theme = createTheme();

function LoginAdmin() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    users.map((u, i) => {
      if (u.username === username && u.password === password) {
        setOpen(true);
      }
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              marginBottom: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/">Back to Home</Link>
                </Grid>
                <Grid item>
                  <Link to="/register">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <CopyRight />
        </Container>
      </ThemeProvider>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          LOGIN DENGAN MENGGUNAKAN USERNAME : {username} DAN PASSWORD :
          {password} TELAH BERHASIL
          <CheckCircleIcon color="success" />
        </DialogTitle>
        <DialogActions>
          <Link to="/dataGuru">
            <Button onClick={handleClose}>Oke</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LoginAdmin;
