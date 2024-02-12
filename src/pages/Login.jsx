import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import swal from "sweetalert";
import InputforPassword from "../components/Inputforpassword";
import Logo from "../icons/logo.png";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
function Copyright(props) {
  return <></>;
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const jsonData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "ok") {
          swal({
            title: "เข้าสู่ระบบ",
            text: "ยินดีต้อนรับ",
            icon: "success",
            timer: 890,
            buttons: false,
          }).then(() => {
            localStorage.setItem("token", data.token);
            window.location = "/Sidenav";
          });
        } else {
          swal({
            title: "รหัสผ่านไม่ถูกต้อง",
            text: "You clicked the button!",
            icon: "error",
            timer: 890,
            button: false,
          });
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            justifyContent:'center',
            marginTop:15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={Logo}
            sx={{ width: 150, height: 150 }}
          />
          
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            
          </Avatar> */}
          {/* <Typography component="h1" variant="h5">
            เข้าสู่ระบบ
          </Typography> */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
            <InputforPassword />
            <Grid container marginTop={2}>
              <Grid item xs>
                <Link href="#" variant="body2" underline="hover">
                  ลืมรหัสผ่าน
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2, backgroundColor: "#00CD66" }}
            >
              <LoginIcon />
              เข้าสู่ระบบ
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
