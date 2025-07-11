import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { invoiceApi } from "../apiService";

export default function AdminInvoice() {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await invoiceApi.getAllInvoicesAdmin();
        setRows(res.data ?? []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const deleteInvoice = async (id) => {
    try {
      await invoiceApi.deleteInvoice(id);
      setRows((prev) => prev.filter((inv) => inv.id !== id));
      Swal.fire({ icon: "success", title: `Invoice ${id} deleted` });
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to delete invoice" });
    }
  };

  const filtered = rows.filter((inv) =>
    `${inv.invoiceCode}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
        <TextField
          size="small"
          placeholder="Search invoice…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: { xs: "100%", sm: 280 } }}
        />

        <Button variant="contained" onClick={() => navigate("/add-invoice")}>
          Create Invoice
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              {[
                "No",
                "User",
                "Invoice Code",
                "Date",
                "Total Price",
                "Total Course",
                "Payment Method",
                "Edit",
                "Delete",
              ].map((h) => (
                <TableCell key={h} sx={{ color: "white" }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((inv, idx) => (
              <TableRow key={inv.id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{inv.userName || "-"}</TableCell>
                <TableCell>{inv.invoiceCode}</TableCell>
                <TableCell>
                  {new Date(inv.date).toLocaleDateString("id-ID")}
                </TableCell>
                <TableCell>{Number(inv.totalPrice).toLocaleString("id-ID")}</TableCell>
                <TableCell>{inv.totalCourse}</TableCell>
                <TableCell>{inv.paymentMethodName || "-"}</TableCell>
                <TableCell>
                  <IconButton onClick={() => navigate(`/edit-invoice/${inv.id}`)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => deleteInvoice(inv.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={9} align="center" sx={{ py: 4 }}>
                  No invoices found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
