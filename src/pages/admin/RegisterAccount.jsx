import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BackGroundSMK from "../../assets/Background SMK 1 Banjar.jpg";
import CopyRight from "../../components/admin/CopyRight";
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="/" color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

function RegisterAccount() {
  const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(async (response) => {
      if (response.ok) {
        console.log("berhasil");
        setOpen(true);
      }
    });
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <div className="flex flex-nowrap gap-3">
                <TextField
                  margin="normal"
                  id="firstname"
                  label="Firstname"
                  name="firstname"
                  autoComplete="firstname"
                  autoFocus
                  className="w-1/2"
                />
                <TextField
                  margin="normal"
                  id="lastname"
                  label="Lastname"
                  name="lastname"
                  autoComplete="lastname"
                  autoFocus
                  className="w-1/2"
                />
              </div>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container className="-mb-10">
                <Grid item xs>
                  <Link to="/loginAdmin">Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <CopyRight />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              SELAMAT AKUN ANDA TELAH TERDAFTAR
              <CheckCircleIcon color="success" />
            </DialogTitle>
            <DialogActions>
              <Link to="/">
                <Button onClick={handleClose}>Oke</Button>
              </Link>
            </DialogActions>
          </Dialog>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default RegisterAccount;
