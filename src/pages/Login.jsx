import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "@fontsource/montserrat";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Email, Password } from "@mui/icons-material";

axios.defaults.baseURL = "https://localhost:7071";
const Login = () => {
  const [payload, setPayload] = useState({
    Email: "",
    Password: "",
  });
  const navigate = useNavigate();

  const minChar = payload.Password.length > 0;
  const checkCharac = payload.Password.length > 5;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("/api/Auth/login", {
        email: payload.Email,
        password: payload.Password,
      })
      .then(function (response) {
        console.log("response dari backend", response);

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.user.username);
          alert("Login sukses!");
          navigate("/");
        } else {
          alert("Login gagal: " + response.data.message);
        }
      })
      .catch(function (error) {
        console.error(error);
        alert("Terjadi kesalahan server");
      });
  };

  console.log(payload);
  return (
    <>
      <Navbar />
      <Stack
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          fontFamily: "Montserrat",
          backgroundColor: "white",
          pt: 7.5,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: "38rem",
            width: "100%",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{ width: "100%", color: "#790B0A", fontSize: "24px" }}
          >
            Welcome Back!
          </Typography>

          <Typography
            color="#4f4f4f"
            sx={{ width: "100%", fontSize: "16px", pb: 2 }}
          >
            Please login first
          </Typography>

          <TextField
            name="Email"
            size="small"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "16px",
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "14px",
              },
            }}
          />

          <TextField
            name="Password"
            size="small"
            error={!checkCharac && minChar}
            helperText={
              !checkCharac && minChar ? "password minimal 6 karakter" : ""
            }
            label="Password"
            fullWidth
            type="password"
            width="30vw"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "16px",
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "14px",
              },
            }}
          />

          <Typography
            color="#4f4f4f"
            sx={{ width: "100%", fontSize: "16px", pb: 2 }}
          >
            Forgot Password?<Link to="/forgot-password">Click Here</Link>
          </Typography>

          <Stack
            direction="row"
            sx={{ width: "100%", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              size="medium"
              color="red"
              sx={{
                backgroundColor: "#790b0a",
                color: "#fff",
                textTransform: "none",
                width: "140px",
                height: "38px",
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: "100%", justifyContent: "center", padding: "36px 0" }}
          >
            <Typography color="#4f4f4f" x={{ width: "100%", fontSize: "16px" }}>
              Don’t have an account? <Link to={"/register"}>Sign Up here</Link>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
