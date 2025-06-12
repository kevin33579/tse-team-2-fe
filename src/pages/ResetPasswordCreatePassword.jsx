import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import "@fontsource/montserrat";

const ResetPasswordCreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirm = () => setShowConfirm((prev) => !prev);

  const passwordsMatch = password === confirmPassword;
  const showError = password && confirmPassword && !passwordsMatch;
  const isButtonDisabled =
    !password || !confirmPassword || !passwordsMatch || password.length < 8;

  return (
    <>
      <Navbar />
      <Stack
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          fontFamily: "Montserrat",
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
              pb: "2rem",
            }}
          >
            Create Password
          </Typography>

          <FormControl
            fullWidth
            variant="outlined"
            error={password.length > 0 && password.length < 8}
          >
            <InputLabel htmlFor="new-password">New Password</InputLabel>
            <OutlinedInput
              id="new-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="New Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {password.length > 0 && password.length < 8 && (
              <FormHelperText>
                Password must be at least 8 characters
              </FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth variant="outlined" error={showError}>
            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
            <OutlinedInput
              id="confirm-password"
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Confirm Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleConfirm} edge="end">
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {showError && (
              <FormHelperText>Passwords do not match</FormHelperText>
            )}
          </FormControl>

          <Stack
            direction="row"
            spacing={2}
            sx={{ width: "100%", justifyContent: "flex-end", mt: "1rem" }}
          >
            <Button
              variant="outlined"
              size="large"
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
              size="medium"
              sx={{
                color: "#fff",
                textTransform: "none",
                width: { xs: "35%", sm: "8rem" },
                height: "2.4rem",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
              onClick={() => alert("Confirm clicked")}
              disabled={isButtonDisabled}
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
