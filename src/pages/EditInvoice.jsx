import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { invoiceApi, user, paymentMethodApi } from "../apiService";
import Swal from "sweetalert2";

export default function EditInvoice() {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [users, setUsers] = useState([]);
  const [methods, setMethods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const inv = await invoiceApi.getInvoiceById(id);
        const u = await user.getAllUsersApi();
        const m = await paymentMethodApi.getPaymentMethod();

        setForm(inv.data);
        setUsers(u); 
        setMethods(m);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    })();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await invoiceApi.updateInvoice(form);
      Swal.fire("Updated", "Invoice berhasil diubah", "success");
      navigate("/admin-invoices");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Gagal mengubah invoice", "error");
    }
  };

  if (!form) return <Typography p={4}>Loading...</Typography>;

  return (
    <Box p={4} component={Paper} sx={{ maxWidth: 600, mx: "auto" }}>
      <Typography variant="h6" mb={2}>
        Edit Invoice
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          select
          fullWidth
          label="User"
          required
          value={form.userId}
          onChange={(e) => setForm({ ...form, userId: e.target.value })}
          sx={{ mb: 2 }}
        >
          {Array.isArray(users) && users.length > 0 ? (
            users.map((u) => (
              <MenuItem key={u.id} value={u.id}>
                {u.username || u.name || "Unnamed User"}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No users available</MenuItem>
          )}
        </TextField>

        <TextField
          fullWidth
          label="Total Price"
          type="number"
          value={form.totalPrice}
          onChange={(e) => setForm({ ...form, totalPrice: e.target.value })}
          sx={{ mb: 2 }}
          required
        />

        <TextField
          fullWidth
          label="Total Course"
          type="number"
          value={form.totalCourse}
          onChange={(e) => setForm({ ...form, totalCourse: e.target.value })}
          sx={{ mb: 2 }}
          required
        />

        <TextField
          select
          fullWidth
          label="Payment Method"
          required
          value={form.paymentMethodId}
          onChange={(e) =>
            setForm({ ...form, paymentMethodId: e.target.value })
          }
          sx={{ mb: 2 }}
        >
          {Array.isArray(methods) && methods.length > 0 ? (
            methods.map((pm) => (
              <MenuItem key={pm.id} value={pm.id}>
                {pm.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No payment methods available</MenuItem>
          )}
        </TextField>

        <Button type="submit" variant="contained">
          Update
        </Button>
      </form>
    </Box>
  );
}
