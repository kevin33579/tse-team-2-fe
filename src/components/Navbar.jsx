import { AppBar, Toolbar, Stack, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import "@fontsource/montserrat";
import { useNavigate } from "react-router-dom";

const Logo = styled("img")({
  height: 30,
  marginRight: 8,
});

export default function Navbar() {
  const navigate = useNavigate();
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
          gap: 1,
          ":hover": "",
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
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Otomobil
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          minWidth="fit-content"
          sx={{
            flexShrink: 1,
          }}
        >
          <Button
            variant="text"
            onClick={() => navigate("/register")}
            sx={{
              minWidth: "auto",
              px: 1,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            <Typography sx={{ color: "primary.main" }}>Sign Up</Typography>
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            sx={{
              minWidth: "auto",
              px: 2,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              backgroundColor: "primary.main",
            }}
          >
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
