import { useEffect, useState, useContext } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import "@fontsource/montserrat";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";
import { usePost } from "../hooks/UseApi";

export default function Login() {
  const { user } = useContext(AppContext);
  const { post } = usePost();
  const [payload, setPayload] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  /* ─────────────────────────  redirects  ───────────────────────── */
  useEffect(() => {
    if (user.token) navigate("/");
  }, [user.token, navigate]);

  /* ─────────────────────────  handlers  ───────────────────────── */
  const handleChange = (e) =>
    setPayload((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    try {
      const res = await post("/api/Auth/login", payload);
      localStorage.setItem("token", res.token);
      localStorage.setItem("id", res.user.userID);
      localStorage.setItem("role", res.user.roleName);
      localStorage.setItem("username", res.user.username);

      Swal.fire({ title: "Login berhasil", icon: "success", timer: 1500 });
      navigate("/");
    } catch (err) {
      Swal.fire({ title: "Login gagal", icon: "error" });
      console.error(err);
    }
  };

  /* ─────────────────────────  ui  ───────────────────────── */
  const passLen = payload.password.length;
  const passError = passLen > 0 && passLen < 6;

  return (
    <>
      <Navbar />

      <Stack
        minHeight="100vh"
        bgcolor="white"
        alignItems="center"
        pt={{ xs: 6, md: 10 }}
        px={2}
        fontFamily="Montserrat"
      >
        <Box width={{ xs: "100%", sm: "28rem" }} component={Stack} spacing={3}>
          <Typography
            color="#790B0A"
            fontWeight={600}
            fontSize={{ xs: 20, sm: 24 }}
            textAlign={{ xs: "left", sm: "left" }}
          >
            Welcome Back!
          </Typography>

          <Typography
            color="#4F4F4F"
            fontSize={{ xs: 14, sm: 16 }}
            textAlign={{ xs: "left", sm: "left" }}
            pb={1}
          >
            Please login first
          </Typography>

          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            size="small"
            onChange={handleChange}
            InputProps={{ sx: { fontSize: 14 } }}
            InputLabelProps={{ sx: { fontSize: 13 } }}
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            size="small"
            error={passError}
            helperText={passError ? "Password minimal 6 karakter" : ""}
            onChange={handleChange}
            InputProps={{ sx: { fontSize: 14 } }}
            InputLabelProps={{ sx: { fontSize: 13 } }}
          />

          <Typography
            fontSize={14}
            color="#4F4F4F"
            textAlign={{ xs: "center", sm: "left" }}
          >
            Forgot Password?&nbsp;
            <Link to="/forgot-password">Click here</Link>
          </Typography>

          <Stack direction="row" justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                width: 140,
                height: 38,
                textTransform: "none",
                bgcolor: "#790B0A",
                fontSize: 14,
                "&:hover": { bgcolor: "#5a0807" },
              }}
            >
              Login
            </Button>
          </Stack>

          <Typography fontSize={14} color="#4F4F4F" textAlign="center" pt={3}>
            Don’t have an account?&nbsp;
            <Link to="/register">Sign up here</Link>
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
