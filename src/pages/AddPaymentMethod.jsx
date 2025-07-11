import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { paymentMethodApi } from "../apiService";
import Swal from "sweetalert2";

export default function AddPaymentMethod() {
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await paymentMethodApi.createPaymentMethod(form);
      Swal.fire("Created", "Payment method berhasil dibuat", "success");
      navigate("/admin-payment-methods");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Gagal membuat payment method", "error");
    }
  };

  return (
    <Box p={4} component={Paper} sx={{ maxWidth: 600, mx: "auto" }}>
      <Typography variant="h6" mb={2}>
        Create New Payment Method
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Image URL"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </Box>
  );
}
