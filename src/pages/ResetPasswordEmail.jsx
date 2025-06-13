import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";

const ResetPasswordEmail = () => {
    const [email, setEmail] = useState("");
  
    return (
      <>
        <Navbar />
        <Stack
          sx={{
            minHeight: "100vh",
            alignItems: "center",
            backgroundColor: "white",
            pt: { xs: "4rem", sm: "5rem" },
          }}
        >
          <Stack
            spacing={2}
            sx={{
              maxWidth: "38rem",
              width: "90%",
              alignItems: "flex-start",
              textAlign: "left",
              mt: { xs: "2rem", sm: "3rem" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                width: "100%",
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                fontWeight: 600,
              }}
            >
              Reset Password
            </Typography>
  
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                width: "100%",
                fontSize: { xs: "0.875rem", sm: "1rem" },
                pb: { xs: "1.5rem", sm: "2.5rem" },
              }}
            >
              Send OTP code to your email address
            </Typography>
  
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                name="email"
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
  
            <Stack
              direction="row"
              spacing={2}
              sx={{
                width: "100%",
                justifyContent: "flex-end",
                flexWrap: "wrap",
                pt: "1rem",
              }}
            >
              <Button
                variant="outlined"
                size="medium"
                sx={{
                  textTransform: "none",
                  width: { xs: "35%", sm: "8rem" },
                  height: "2.4rem",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
                onClick={() => alert("Cancel clicked")}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  width: { xs: "35%", sm: "8rem" },
                  height: "2.4rem",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
                onClick={() => alert("Confirm clicked")}
                disabled={!email.trim()}
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