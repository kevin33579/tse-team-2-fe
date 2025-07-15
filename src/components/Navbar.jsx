import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Button,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const Logo = styled("img")({
  height: 30,
  marginRight: 8,
});

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const drawerContent = (
    <List sx={{ width: 200 }}>
      {token ? (
        <>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/checkout")}>
              <ShoppingCartIcon sx={{ mr: 1 }} />
              <ListItemText primary="Checkout" />
            </ListItemButton>
          </ListItem>
          {role === "Admin" && (
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/admin-products")}>
                <ListItemText primary="Admin View" />
              </ListItemButton>
            </ListItem>
          )}
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/my-class")}>
              <ListItemText primary="My Class" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/invoice")}>
              <ListItemText primary="Invoice" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/profile")}>
              <PersonIcon sx={{ mr: 1 }} />
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <LogoutIcon sx={{ mr: 1 }} />
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </>
      ) : (
        <>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/register")}>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/login")}>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        </>
      )}
    </List>
  );

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 1.5, sm: 3, md: 6 },
            py: 1,
            fontFamily: "Montserrat",
          }}
        >
          <Stack direction="row" alignItems="center">
            <Logo src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" />
            <Typography
              variant="h6"
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

          {isMobile ? (
            <>
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon sx={{ color: "primary.main" }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={2} alignItems="center">
              {token ? (
                <>
                  <IconButton onClick={() => navigate("/checkout")}>
                    <ShoppingCartIcon sx={{ color: "primary.main" }} />
                  </IconButton>
                  {role === "Admin" && (
                    <Button
                      variant="text"
                      onClick={() => navigate("/admin-products")}
                      sx={{ color: "primary.main", fontSize: "0.875rem" }}
                    >
                      Admin View
                    </Button>
                  )}
                  <Button
                    variant="text"
                    onClick={() => navigate("/my-class")}
                    sx={{ color: "primary.main", fontSize: "0.875rem" }}
                  >
                    My Class
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
                    Invoice
                  </Button>
                  <Divider orientation="vertical" flexItem />
                  <IconButton onClick={() => navigate("/profile")}>
                    <PersonIcon sx={{ color: "primary.main" }} />
                  </IconButton>
                  <IconButton onClick={handleLogout}>
                    <LogoutIcon sx={{ color: "#790b0a" }} />
                  </IconButton>
                </>
              ) : (
                <>
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
                </>
              )}
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
