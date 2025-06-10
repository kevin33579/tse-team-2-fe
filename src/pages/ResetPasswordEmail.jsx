import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import "@fontsource/montserrat";

const ResetPasswordEmail = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Montserrat",
        }}
      >
        <Box
          sx={{
            padding: "40px",
            borderRadius: "20px",
            maxWidth: "600px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            marginTop: "60px",
            fontFamily: "Montserrat",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "medium", marginBottom: "10px", width: "100%" }}
          >
            Reset Password
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight:'light',color: "#666", marginBottom: "30px", width: "100%" }}
          >
            Send OTP code to your email address
          </Typography>

          <TextField
            label="Email"
            name="email"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "30px" }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "20px",
              width: "100%",
            }}
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
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResetPasswordEmail;
