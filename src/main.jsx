import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/montserrat";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppProvider } from "./context/AppContext";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: "#790B0A",
    },
    secondary: {
      main: "#000000",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppProvider>
  </StrictMode>
);
