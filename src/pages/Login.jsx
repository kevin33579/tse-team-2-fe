import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "@fontsource/montserrat";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const minChar = password.length > 0;
  const checkCharac = password.length > 5;
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

          <Typography color="#4f4f4f" sx={{ width: "100%", fontSize: "16px",pb:2}}>
            Please login first
          </Typography>
            
          <TextField
            size="small"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          <Typography color="#4f4f4f" sx={{ width: "100%", fontSize: "16px",pb:2 }}>
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
              onClick={() => alert("Confirm clicked")}
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
