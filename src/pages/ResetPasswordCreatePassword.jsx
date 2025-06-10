import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import "@fontsource/montserrat";

const ResetPasswordCreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
            maxWidth: "600px",
            width: "100%",
            alignItems: "flex-start",
            textAlign: "left",
            marginTop: "60px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ width: "100%", paddingBottom: "40px" }}
          >
            Create Password
          </Typography>

          <TextField
            label="New Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            label="Confirm New Password"
            type="password"
            fullWidth
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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

export default ResetPasswordCreatePassword;
