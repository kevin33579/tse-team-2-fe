// LayoutAdmin.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

export default function LayoutAdmin() {
  return (
    <Box sx={{ display: "flex", width: "100vw", overflowX: "hidden" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        <Box
          sx={{
            p: 3,
            height: "100%",
            overflowX: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
