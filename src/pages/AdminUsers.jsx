import { useEffect, useState } from "react";
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
import Swal from "sweetalert2";
import { user as userApi } from "../apiService";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BlockIcon from "@mui/icons-material/Block";

export default function AdminUsers() {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await userApi.getAllUsersApi();
        setRows(res ?? []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleDeactivate = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure deactivate this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, deactivate",
    });
    if (!confirm.isConfirmed) return;

    try {
      await userApi.deactivateUserApi(id);
      Swal.fire({ icon: "success", title: "Deactivated" }).then(() => {
        window.location.reload();
      });
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to deactivate user" });
    }
  };

  const handleActivate = async (id) => {
    try {
      await userApi.activateUserApi(id);
      Swal.fire({ icon: "success", title: "User activated" }).then(() => {
        window.location.reload();
      });
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to activate user" });
    }
  };

  const filtered = rows.filter((u) =>
    u.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      {/* Title */}
      <Typography variant="h5" mb={2} fontWeight="bold">
        User List
      </Typography>

      {/* Search */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 2,
          alignItems: "center",
        }}
      >
        <TextField
          size="small"
          placeholder="Search by username…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: { xs: "100%", sm: 300 } }}
        />
      </Box>

      {/* Table */}
      <Box sx={{ py: 4 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: "primary.main" }}>
              <TableRow>
                <TableCell sx={{ color: "white", textAlign: "left" }}>
                  Username
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "left" }}>
                  Email
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Role
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Is Active
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Activate
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Deactivate
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered.map((u) => (
                <TableRow key={u.id}>
                  <TableCell sx={{ textAlign: "left" }}>{u.username}</TableCell>
                  <TableCell sx={{ textAlign: "left" }}>{u.email}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{u.roleName}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {u.isActive ? "True" : "False"}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton
                      size="small"
                      color="success"
                      onClick={() => handleActivate(u.id)}
                    >
                      <CheckCircleIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDeactivate(u.id)}
                    >
                      <BlockIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
