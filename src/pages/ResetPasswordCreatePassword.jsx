import React, { useState, useContext,useEffect } from "react";
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
import { usePost } from "../hooks/UseApi";
import { AppContext } from "../context/AppContext";
import Swal from "sweetalert2";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPasswordCreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const { user } = useContext(AppContext);
  const { post } = usePost();

  useEffect(() => {
    if (user?.token) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirm = () => setShowConfirm((prev) => !prev);

  const passwordsMatch = password === confirmPassword;
  const showError = password && confirmPassword && !passwordsMatch;
  const isButtonDisabled =
    !password || !confirmPassword || !passwordsMatch || password.length < 8;

  const handleResetPassword = async () => {
    try {
      const payload = {
        token,
        newPassword: password,
        confirmPassword: password,
      };

      const response = await post("/api/auth/reset-password", payload);

      if (response?.success) {
        Swal.fire({
          title: "Success",
          text: "Password successfully reset, please login.",
          icon: "success",
        });
        navigate("/login");
      } else {
        alert(response?.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while resetting password.");
    }
  };

  return (
    <>
      <Stack
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          backgroundColor: "white",
          pt: { xs: 6, sm: 12 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: "38rem",
            width: "90%",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              width: "100%",
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              pb: 4.5,
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
            sx={{
              width: "100%",
              justifyContent: "flex-end",
              pt: { xs: 1, sm: 2 },
            }}
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
              onClick={() => handleResetPassword()}
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
