import { use, useState,useEffect } from "react";
import { Grid, Container, Typography, TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { usePost } from "../hooks/UseApi";
import Swal from "sweetalert2";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [payload, setPayload] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { post, loading } = usePost();
  const passLen = payload.password.length;
  const passError = passLen > 0 && passLen < 6;
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  useEffect(() =>{
    console.log(payload.email);
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    // validasi manual konfirmasi password
    const usernameRegex = /^[A-Za-z\s]+$/;
    if (!usernameRegex.test(payload.username)) {
      Swal.fire({
        title: "Error",
        text: "Nama hanya boleh berisi huruf.",
        icon: "warning",
      });
      return;
    }
    if (payload.password.length < 6) {
      Swal.fire({
        title: "Error",
        text: "Password minimal 6 karakter.",
        icon: "warning",
      });
      return;
    }
    if (payload.password !== payload.confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Password dan konfirmasi tidak sama",
        icon: "warning",
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|co\.id)$/;
    if (!emailRegex.test(payload.email)) {
      Swal.fire({
        title: "Error",
        text: "Email tidak valid. Harus mengandung @ dan diakhiri .com atau .co.id.",
        icon: "warning",
      });
      return;
    }

    try {
      // Hanya kirim data yang dibutuhkan backend
      const { username, email, password } = payload;

      const response = await post("/api/auth/register", {
        username,
        email,
        password,
      });

      console.log("Register success:", response);

      if (response.success) {
        Swal.fire({
          title: "Registration Successful",
          text: "Please check your email for verification to continue.",
          icon: "success",
        });
        navigate("/login");
      } else {
        Swal.fire({
          title: "Registration Failed",
          text: response.message || "Please try again.",
          icon: "error",
        });
      }
    } catch (err) {
      console.error("Register error:", err);
      Swal.fire({
        title: "Error",
        text: err.message || "An error occurred during registration.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ minHeight: "100vh", bgcolor: "white" }}
      >
        <Container maxWidth="sm" sx={{ mt: 6 }}>
          <Grid container spacing={2} direction="column" sx={{ pt: 10 }}>
            <Grid item>
              <Typography
                sx={{
                  color: "#800000",
                  fontWeight: "bold",
                  textAlign: "left",
                  fontSize: { md: "24px", xs: "18px" },
                }}
              >
                Let’s Join Our Course!
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#777",
                  textAlign: "left",
                  fontSize: { md: "16px", xs: "14px" },
                }}
              >
                Please register first
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Name"
                name="username"
                variant="outlined"
                fullWidth
                value={payload.username}
                onChange={handleChange}
                InputProps={{ sx: { fontSize: 14 } }}
                InputLabelProps={{ sx: { fontSize: 13 } }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                value={payload.email}
                onChange={handleChange}
                InputProps={{ sx: { fontSize: 14 } }}
                InputLabelProps={{ sx: { fontSize: 13 } }}
              />
            </Grid>
            <Grid item>
              <TextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                size="small"
                value={payload.password}
                error={passError}
                helperText={passError ? "Password minimal 6 karakter" : ""}
                onChange={handleChange}
                InputProps={{
                  sx: { fontSize: 14 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ sx: { fontSize: 13 } }}
              />
            </Grid>
            <Grid item>
              <TextField
                name="ConfirmPassword"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                size="small"
                value={confirmPassword}
                error={passError}
                helperText={passError ? "Password minimal 6 karakter" : ""}
                onChange={handleChange}
                InputProps={{
                  sx: { fontSize: 14 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ sx: { fontSize: 13 } }}
              />
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Button
                variant="contained"
                sx={{ bgcolor: "#800000", "&:hover": { bgcolor: "#a00000" } }}
                onClick={handleSubmit}
                disabled={loading}
                InputProps={{ sx: { fontSize: 14 } }}
                InputLabelProps={{ sx: { fontSize: 13 } }}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item textAlign="center">
              <Typography sx={{ fontSize: { md: "16px", xs: "14px" } }}>
                Have an account? <Link to="/login">Login here</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Register;
