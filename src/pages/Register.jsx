import { useState } from "react";
import { Grid, Container, Typography, TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { usePost } from "../hooks/UseApi";
import Swal from "sweetalert2";

const Register = () => {
  const [payload, setPayload] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { post, loading } = usePost();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await post("/api/auth/register", payload);
      console.log("Register success:", response);

      if (response.success) {
        // If registration is successful, redirect to login page
        Swal.fire({
          title: "Registration Successful",
          text: "Please login to continue.",
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
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                value={payload.password}
                onChange={handleChange}
                InputProps={{ sx: { fontSize: 14 } }}
                InputLabelProps={{ sx: { fontSize: 13 } }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                variant="outlined"
                fullWidth
                value={payload.confirmPassword}
                onChange={handleChange}
                InputProps={{ sx: { fontSize: 14 } }}
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
