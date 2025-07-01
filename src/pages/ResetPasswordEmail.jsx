import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";

const ResetPasswordEmail = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendForgotPassword = async () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await axios.post(
        "https://localhost:7071/api/auth/forgot-password",
        { email }
      );

      if (response.status === 200) {
        setSuccessMessage("Password reset link has been sent to your email.");
      } else {
        setErrorMessage(response.data.message || "Failed to send reset email.");
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        // error dari server
        setErrorMessage(
          err.response.data.message || "Failed to send reset email."
        );
      } else {
        // error jaringan
        setErrorMessage("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
            mt: { xs: "2rem", sm: 2 },
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
              pb: { xs: "1.5rem", sm: 5.5 },
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
              pt: 3,
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
              onClick={() => setEmail("")}
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
              onClick={handleSendForgotPassword}
              disabled={!email.trim() || loading}
            >
              {loading ? "Sending..." : "Confirm"}
            </Button>
          </Stack>
        </Stack>
      </Stack>

      {/* feedback message snackbar */}
      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage("")}
      >
        <Alert severity="success" onClose={() => setSuccessMessage("")}>
          {successMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage("")}
      >
        <Alert severity="error" onClose={() => setErrorMessage("")}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ResetPasswordEmail;
