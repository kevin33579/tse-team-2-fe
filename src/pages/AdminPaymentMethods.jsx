import { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { paymentMethodApi } from "../apiService";

export default function AdminPaymentMethods() {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await paymentMethodApi.getPaymentMethodAdmin();
        setRows(res ?? []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const deletePaymentMethod = async (id) => {
    try {
      await paymentMethodApi.deletePaymentMethod(id);
      setRows((prev) => prev.filter((item) => item.id !== id));
      Swal.fire({ icon: "success", title: `Payment method ${id} deleted` });
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to delete payment method" });
    }
  };

  const filtered = rows.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
        <TextField
          size="small"
          placeholder="Search payment method…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: { xs: "100%", sm: 280 } }}
        />

        <Button
          variant="contained"
          onClick={() => navigate("/add-payment-method")}
        >
          Add Payment Method
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white", textAlign: "center" }}>No</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>ID</TableCell>
              <TableCell sx={{ color: "white", textAlign: "left" }}>Name</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Image</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Active</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Edit</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((item, idx) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ textAlign: "center" }}>{idx + 1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{item.id}</TableCell>
                  <TableCell sx={{ textAlign: "left" }}>{item.name}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.imageUrl ? (
                      <Avatar
                        src={item.imageUrl}
                        alt={item.name}
                        variant="square"
                        sx={{ width: 56, height: 56, mx: "auto" }}
                      />
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.isActive ? "YES" : "NO"}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton
                      onClick={() =>
                        navigate(`/edit-payment-method/${item.id}`)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton
                      color="error"
                      onClick={() =>
                        Swal.fire({
                          title: `Delete payment method ${item.name}?`,
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deletePaymentMethod(item.id);
                          }
                        })
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                  No payment methods found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
