import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { invoiceApi, user, paymentMethodApi } from "../apiService";
import Swal from "sweetalert2";

export default function AddInvoice() {
  const [form, setForm] = useState({
    userId: "",
    totalPrice: "",
    totalCourse: "",
    paymentMethodId: "",
  });

  const [users, setUsers] = useState([]);
  const [methods, setMethods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const u = await user.getAllUsersApi();
        setUsers(u);

        const m = await paymentMethodApi.getPaymentMethod();
        console.log("Payment methods fetched:", m);
        setMethods(m);
      } catch (err) {
        console.error("Fetch users or payment method failed:", err);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await invoiceApi.createInvoice(form);
      Swal.fire("Created", "Invoice berhasil dibuat", "success");
      navigate("/admin-invoices");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Gagal membuat invoice", "error");
    }
  };

  return (
    <Box p={4} component={Paper} sx={{ maxWidth: 600, mx: "auto" }}>
      <Typography variant="h6" mb={2}>
        Create New Invoice
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
          {users.map((u) => (
            <MenuItem key={u.id} value={u.id}>
              {u.username}
            </MenuItem>
          ))}
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
          {Array.isArray(methods) ? (
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
          Save
        </Button>
      </form>
    </Box>
  );
}
