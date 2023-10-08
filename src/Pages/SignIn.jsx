import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const defaultTheme = createTheme({
  palette: {
    text: {
      primary: "#FFFF"
    },
  },
  typography: {
    h3: {
      fontSize: "1.2rem",
      fontWeight: 600,
      color: "white",
    },
    body1: {
      fontSize: "1rem",
      color: "white",
    },
    body2: {
      fontSize: "0.875rem",
      color: "white",
    },
  }
});



export default function SignIn() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://16.170.173.197/users/login", userData)
      .then((response) => {
        console.log("🚀 ~ file: SignIn.jsx:57 ~ .then ~ response:", response)
        const token = response.data.token;
        localStorage.setItem("token", token)
        navigate("/dashboard")

      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value })
                }}
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
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value })
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    sx={{ color: "white" }}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
