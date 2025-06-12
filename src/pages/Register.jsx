import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import Navbar from "../components/Navbar";

const Register = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Send to API:", payload);
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
                  fontSize: "24px",
                }}
              >
                Let’s Join Our Course!
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                sx={{ color: "#777", textAlign: "left", fontSize: "16px" }}
              >
                Please register first
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                value={payload.name}
                onChange={handleChange}
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
              />
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Button
                variant="contained"
                sx={{ bgcolor: "#800000", "&:hover": { bgcolor: "#a00000" } }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item textAlign="center">
              <Typography sx={{ fontSize: "16px" }}>
                Have an account?{" "}
                <Link href="#" underline="hover">
                  Login here
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Register;
