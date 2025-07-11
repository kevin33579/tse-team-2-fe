import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;

  const sidebarItems = [
    { text: "Product", path: "/admin-products" },
    { text: "Users", path: "/admin-users" },
    { text: "Product Type", path: "/admin-type" },
    { text: "Invoice", path: "/admin-invoices" },
    { text: "Payment Method", path: "/admin-payment-methods" },
    { text: "Schedule", path: "/admin-schedule" },
  ];

  const drawerContent = (
    <Box sx={{ width: drawerWidth }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Admin Panel
        </Typography>
      </Box>
      <Divider />
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                if (isMobile) setMobileOpen(false); // close drawer on mobile
              }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Toggle button only for mobile */}
      {isMobile && (
        <IconButton
          onClick={handleToggle}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300, // above drawer
            backgroundColor: "white",
            boxShadow: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Permanent drawer for desktop */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          anchor="left"
          open
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Temporary drawer for mobile */}
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
