import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
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
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white", textAlign: "center" }}>No</TableCell>
              <TableCell sx={{ color: "white", textAlign: "left" }}>User</TableCell>
              <TableCell sx={{ color: "white", textAlign: "left" }}>Invoice Code</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Date</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Total Price</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Total Course</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Payment Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((inv, idx) => (
              <TableRow key={inv.id}>
                <TableCell sx={{ textAlign: "center" }}>{idx + 1}</TableCell>
                <TableCell sx={{ textAlign: "left" }}>{inv.userName || "-"}</TableCell>
                <TableCell sx={{ textAlign: "left" }}>{inv.invoiceCode}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {new Date(inv.date).toLocaleDateString("id-ID")}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {Number(inv.totalPrice).toLocaleString("id-ID")}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>{inv.totalCourse}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{inv.paymentMethodName || "-"}</TableCell>
              </TableRow>
            ))}

            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
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
