import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import "@fontsource/montserrat";

const ResetPasswordEmail = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Navbar />
      <Stack
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          fontFamily: "Montserrat",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            padding: "40px",
            maxWidth: "600px",
            width: "100%",
            alignItems: "flex-start",
            textAlign: "left",
            marginTop: "60px",
          }}
        >
          <Typography variant="h5" sx={{ width: "100%" }}>
            Reset Password
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#666", width: "100%", paddingBottom: "40px" }}
          >
            Send OTP code to your email address
          </Typography>

          <TextField
            label="Email"
            name="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Stack
            direction="row"
            spacing={2}
            sx={{ width: "100%", justifyContent: "flex-end" }}
          >
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#790B0A",
                color: "#790B0A",
                textTransform: "none",
                width: "140px",
                height: "38px",
              }}
              onClick={() => alert("Cancel clicked")}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "#790B0A",
                color: "#fff",
                textTransform: "none",
                width: "140px",
                height: "38px",
              }}
              onClick={() => alert("Confirm clicked")}
            >
              Confirm
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ResetPasswordEmail;
