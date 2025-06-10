import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#790B0A",
    },
    secondary: {
      main: "#000000"
    }
  },
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
