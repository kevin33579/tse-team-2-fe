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
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { user as userApi } from "../apiService";

export default function AdminUsers() {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");

  /* fetch users once */
  useEffect(() => {
    (async () => {
      try {
        const res = await userApi.getAllUsersApi(); // adjust if args needed
        setRows(res ?? []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  /* delete handler */
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });
    if (!confirm.isConfirmed) return;

    try {
      await userApi.deactivateUserApi(id); // make sure api exists
      setRows((prev) => prev.filter((u) => u.id !== id));
      Swal.fire({ icon: "success", title: "Deleted" });
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to delete" });
    }
  };

  /* filter rows by username */
  const displayed = rows.filter((u) =>
    u.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      <Typography variant="h5" mb={2}>
        User List
      </Typography>

      {/* search bar */}
      <TextField
        size="small"
        placeholder="Search by username…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2, width: { xs: "100%", sm: 300 } }}
      />

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
            {displayed.map((u) => (
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

            {displayed.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
