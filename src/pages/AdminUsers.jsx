// src/pages/AdminUsers.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { user } from "../apiService"; // adjust name/path to match
// you'll also need userApi.deleteUser(id) – make sure it exists

export default function AdminUsers() {
  const [rows, setRows] = useState([]);

  // ── fetch users on mount ───────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        const res = await user.getAllUsersApi(); // POST "Users"
        setRows(res ?? []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // ── delete handler ─────────────────────────────────────
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });
    if (!confirm.isConfirmed) return;

    try {
      await userApi.deleteUser(id); // make sure this api exists
      setRows((prev) => prev.filter((u) => u.id !== id));
      Swal.fire({ icon: "success", title: "Deleted" });
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to delete" });
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5" mb={2}>
        User List
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              {["Username", "Email", "Role", "Delete"].map((h) => (
                <TableCell key={h} sx={{ color: "white" }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((u) => (
              <TableRow key={u.id}>
                <TableCell>{u.username}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.roleName}</TableCell>

                <TableCell>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDelete(u.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
