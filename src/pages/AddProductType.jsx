import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import Swal from "sweetalert2";
import { productTypeApi } from "../apiService";
import { useNavigate } from "react-router-dom";

export default function AddProductType() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Product type name cannot be empty.",
      });

      return;
    }
    if (!description.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Description cannot be empty.",
      });

      return;
    }

    if (!imageUrl.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Description cannot be empty.",
      });

      return;
    }

    setLoading(true);
    try {
      const payload = { name, description, imageUrl };
      await productTypeApi.createProductsType(payload);
      Swal.fire({
        icon: "success",
        title: "Product Type Created",
        text: `Successfully added "${name}"`,
      });
      navigate("/admin-type");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to create product type.",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ maxWidth: 600, mx: "auto", p: 4 }}>
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight="bold">
            Add New Product Type
          </Typography>

          <TextField
            label="Product Type Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
          />

          <TextField
            label="Image Url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
            sx={{ width: "200px" }}
          >
            {loading ? "Saving..." : "Create Product Type"}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
