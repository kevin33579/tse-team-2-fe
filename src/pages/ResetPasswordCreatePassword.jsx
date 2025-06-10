import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import "@fontsource/montserrat";

const ResetPasswordCreatePassword = () => {
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
          fontFamily: 'Montserrat',
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
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "medium" , marginBottom: "40px", width: "100%" }}
          >
            Create Password
          </Typography>

          <TextField
            label="New Password"
            type="password"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "30px" }}
          />

          <TextField
            label="Confirm New Password"
            type="password"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "40px" }}
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

export default ResetPasswordCreatePassword;
