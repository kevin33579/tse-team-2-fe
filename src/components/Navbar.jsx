import { AppBar, Toolbar, Stack, Typography, Button, Box } from "@mui/material";
import { color, styled } from "@mui/system";
import "@fontsource/montserrat";

const Logo = styled("img")({
  height: 40,
  marginRight: 10,
});

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: 4,
          fontFamily: "Montserrat",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Logo src="/logo.png" alt="Logo" />
          <Typography
            variant="h6"
            component="span"
            fontFamily="Montserrat"
            fontWeight="400"
            fontSize="24px"
          >
            Otomobil
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button
            variant="text"
            onClick={() => alert("Sign Up clicked")}
            sx={{ color: "secondary.main" }}
          >
            <Typography sx={{ color: "primary.main" }}>Sign Up</Typography>
          </Button>
          <Button
            variant="contained"
            onClick={() => alert("Login clicked")}
            sx={{ backgroundColor: "primary.main" }}
          >
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
