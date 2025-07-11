import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { paymentMethodApi } from "../apiService";
import Swal from "sweetalert2";

export default function EditPaymentMethod() {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const pmResponse = await paymentMethodApi.getPaymentMethodById(id);
        const pmData = pmResponse.data || pmResponse; // antisipasi format respons
        setForm(pmData);
      } catch (error) {
        console.error("Failed to fetch payment method:", error);
        Swal.fire("Error", "Failed to load payment method data", "error");
      }
    })();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form || !form.id || form.id === 0) {
      Swal.fire("Error", "Invalid payment method data", "error");
      return;
    }

    try {
      await paymentMethodApi.updatePaymentMethod(form);
      Swal.fire("Updated", "Payment method berhasil diubah", "success");
      navigate("/admin-payment-methods");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Gagal mengubah payment method", "error");
    }
  };

  if (!form) return <Typography p={4}>Loading...</Typography>;

  return (
    <Box p={4} component={Paper} sx={{ maxWidth: 600, mx: "auto" }}>
      <Typography variant="h6" mb={2}>
        Edit Payment Method
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          required
          value={form.name || ""}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Image URL"
          value={form.imageUrl || ""}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          sx={{ mb: 2 }}
        />

        <FormControlLabel
          control={
            <Switch
              checked={form.isActive || false}
              onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
              color="primary"
            />
          }
          label="Active"
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained">
          Update
        </Button>
      </form>
    </Box>
  );
}
