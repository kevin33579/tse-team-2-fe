import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

const Logo = styled("img")({
  height: 30,
  marginRight: 8,
});

export default function Navbar() {
  const navigate = useNavigate();

  // baca token dari localStorage
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear(); // removes token, username, and anything else in localStorage
    navigate("/login");
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 1.5, sm: 3, md: 6 },
          py: 1,
          fontFamily: "Montserrat",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Logo src="/logo.png" alt="Logo" />
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: { xs: "18px", sm: "22px", md: "24px" },
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Otomobil
          </Typography>
        </Stack>

        {token ? (
          // NAVBAR SESUDAH LOGIN
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton onClick={() => navigate("/checkout")}>
              <ShoppingCartIcon sx={{ color: "primary.main" }} />
            </IconButton>
            {localStorage.getItem("role") == "Admin" ? (
              <Button
                variant="text"
                onClick={() => navigate("/admin-products")}
                sx={{ color: "primary.main", fontSize: "0.875rem" }}
              >
                <Typography
                  sx={{
                    ml: 0.5,
                    color: "primari.main",
                    fontSize: "0.875rem",
                    textTransform: "none",
                  }}
                >
                  Admin View
                </Typography>
              </Button>
            ) : (
              ""
            )}

            <Button
              variant="text"
              onClick={() => navigate("/my-class")}
              sx={{ color: "primary.main", fontSize: "0.875rem" }}
            >
              <Typography
                sx={{
                  ml: 0.5,
                  color: "primari.main",
                  fontSize: "0.875rem",
                  textTransform: "none",
                }}
              >
                My Class
              </Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => navigate("/invoice")}
              sx={{
                color: "#790b0a",
                fontSize: "0.875rem",
                textTransform: "none",
              }}
            >
              <Typography
                sx={{ ml: 0.5, color: "primary.main", fontSize: "0.875rem" }}
              >
                Invoice
              </Typography>
            </Button>
            <Divider orientation="vertical" flexItem />
            <IconButton onClick={() => navigate("/profile")}>
              <PersonIcon sx={{ color: "primary.main" }} />
            </IconButton>
            <IconButton onClick={handleLogout}>
              <LogoutIcon sx={{ color: "#790b0a" }} />
            </IconButton>
          </Stack>
        ) : (
          // NAVBAR SEBELUM LOGIN
          <Stack direction="row" spacing={2}>
            <Button
              variant="text"
              onClick={() => navigate("/register")}
              sx={{ color: "primary.main" }}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              sx={{ backgroundColor: "primary.main" }}
            >
              Login
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
