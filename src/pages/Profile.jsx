import React, { useEffect, useState } from "react";
import { Container, Avatar, Typography, Box } from "@mui/material";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    // assume "username" was saved during login:
    const stored = localStorage.getItem("username") ?? "";
    setRole(localStorage.getItem("role") ?? "");
    setUsername(stored);
  }, []);

  const initials = username
    .split(" ")
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2); // up to 2 letters

  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 8, textAlign: "center", minHeight: "60vh" }}
    >
      <Avatar
        sx={{ width: 96, height: 96, bgcolor: "primary.main", mx: "auto" }}
      >
        {initials}
      </Avatar>

      <Box mt={3}>
        <Typography variant="h5" fontWeight={600}>
          {username || "Guest"}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {role || "Unknown role"}
        </Typography>
      </Box>
    </Container>
  );
}
