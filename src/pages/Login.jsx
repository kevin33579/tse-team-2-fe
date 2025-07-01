import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "@fontsource/montserrat";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AppContext } from "../context/AppContext";
import { usePost } from "../hooks/UseApi";
const Login = () => {
  // Using useContext to get values from AppContext
  const { user, theme, login, logout } = useContext(AppContext);
  // Using custom hook for POST requests
  const { post, loading, error } = usePost();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const storedData = localStorage.getItem("data");
    console.log("Stored Data:", JSON.parse(storedData));
  }, []);
  useEffect(() => {
    if (user.token) navigate("/");
  }, [user.token, navigate]);

  const minChar = payload.password.length > 0;
  const checkCharac = payload.password.length > 5;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Login API call using custom hook
      const response = await post("/api/Auth/login", payload);

      // Store token in localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("data", JSON.stringify(response));

      // Using context login function
      login({
        name: response.user.username,
        email: payload.email,
        token: response.token,
      });
      Swal.fire({
        title: "Login Sukses",
        icon: "success",
      });
      // Navigate to home page
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      alert(err.message || "Login failed");
    }
  };

  console.log(payload);
  return (
    <>
      <Navbar />
      <Stack
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          fontFamily: "Montserrat",
          backgroundColor: "white",
          pt: 7.5,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: "38rem",
            width: "100%",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{ width: "100%", color: "#790B0A", fontSize: "24px" }}
          >
            Welcome Back!
          </Typography>

          <Typography
            color="#4f4f4f"
            sx={{ width: "100%", fontSize: "16px", pb: 2 }}
          >
            Please login first
          </Typography>

          <TextField
            name="email"
            size="small"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "16px",
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "14px",
              },
            }}
          />

          <TextField
            name="password"
            size="small"
            error={!checkCharac && minChar}
            helperText={
              !checkCharac && minChar ? "password minimal 6 karakter" : ""
            }
            label="Password"
            fullWidth
            type="password"
            width="30vw"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "16px",
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "14px",
              },
            }}
          />

          <Typography
            color="#4f4f4f"
            sx={{ width: "100%", fontSize: "16px", pb: 2 }}
          >
            Forgot Password?<Link to="/forgot-password">Click Here</Link>
          </Typography>

          <Stack
            direction="row"
            sx={{ width: "100%", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              size="medium"
              color="red"
              sx={{
                backgroundColor: "#790b0a",
                color: "#fff",
                textTransform: "none",
                width: "140px",
                height: "38px",
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: "100%", justifyContent: "center", padding: "36px 0" }}
          >
            <Typography color="#4f4f4f" x={{ width: "100%", fontSize: "16px" }}>
              Don’t have an account? <Link to={"/register"}>Sign Up here</Link>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
