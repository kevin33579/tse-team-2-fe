import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

export default function LayoutAdmin() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar fixed on the left */}
      <Sidebar />

      {/* Main content area */}
      <Box sx={{ flex: 1 }}>
        {/* Navbar at the top */}
        <Navbar />

        {/* Routed page content below navbar */}
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
