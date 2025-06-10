import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "@fontsource/montserrat";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Navbar />
      <Stack
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          fontFamily: "Montserrat",
          backgroundColor: "#f5f5f5",
          paddingTop: "70px",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            maxWidth: "40vw",
            width: "100%",
            alignItems: "flex-start",
            textAlign: "left",
            marginTop: "60px",
          }}
        >
          <Typography variant="h3" sx={{ width: "100%", color: "#790B0A" }}>
            Welcome Back!
          </Typography>

          <Typography variant="h4" color="#4f4f4f" sx={{ width: "100%", padding: "10px  0" }}>
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

          <Typography variant="h6" color="#4f4f4f" sx={{ width: "100%", padding: "10px  0" }}>
            Forgot Password? <a href="#">Click Here</a>
          </Typography>

          <Stack direction="row" spacing={2} sx={{ width: "100%", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              size="medium"
              color="red"
              sx={{
                backgroundColor: "#790b0a",
                color: "#fff",
                textTransform: "none",
                width: "90px",
                height: "30px",
              }}
              onClick={() => alert("Confirm clicked")}
            >
              Login
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ width: "100%", justifyContent: "center", padding: "40px 0" }}>
            <Typography variant="h6" color="#4f4f4f" x={{ width: "100%", padding: "0px  0" }}>
              Don’t have an account? <a href="#"> Sign Up here</a>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
