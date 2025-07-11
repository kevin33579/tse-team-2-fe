import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { productApi, productTypeApi } from "../apiService";
import Swal from "sweetalert2";

export default function EditProduct() {
  const { id } = useParams(); // url : /edit-product/:id
  const navigate = useNavigate();

  const [types, setTypes] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    imageUrl: "",
    productTypeId: "",
    isActive: true,
  });

  const fetchProductType = async () => {
    try {
      const [typeRes, prodRes] = await Promise.all([
        productTypeApi.getAllProductsType(),
        productApi.getProductById(id),
      ]);

      setTypes(typeRes ?? []);
      const data = prodRes.data;
      setForm({
        name: data.name,
        price: data.price,
        stock: data.stock,
        description: data.description ?? "",
        imageUrl: data.imageUrl ?? "",
        productTypeId: data.productTypeId ?? "",
        isActive: data.isActive ?? true, // ← now part of form
      });
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to load product" });
      navigate("/admin-products");
    }
  };

  // ── fetch product + types ─────────────────────────
  useEffect(() => {
    fetchProductType();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productApi.editProduct(id, {
        ...form,
        id: id,
        productTypeId: Number(form.productTypeId),
        description: form.description,
        price: Number(form.price),
        imageUrl: form.imageUrl,
        stock: Number(form.stock),
        isActive: form.isActive,
      });

      await Swal.fire({
        icon: "success",
        title: "Product updated",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/admin-products");
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to update product" });
    }
  };
  console.log(form.isActive);

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Edit Product
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                label="Product Name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                name="price"
                label="Price"
                type="number"
                value={form.price}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                name="stock"
                label="Stock"
                type="number"
                value={form.stock}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                value={form.description}
                onChange={handleChange}
                fullWidth
                multiline
                rows={3}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="imageUrl"
                label="Image URL"
                value={form.imageUrl}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                name="productTypeId"
                label="Product Type"
                value={form.productTypeId}
                onChange={handleChange}
                fullWidth
                required
              >
                {types.map((t) => (
                  <MenuItem key={t.id} value={t.id}>
                    {t.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="isActive"
                label="Is Active"
                select
                value={form.isActive}
                onChange={(e) =>
                  setForm({ ...form, isActive: e.target.value === "true" })
                }
                fullWidth
                required
              >
                <MenuItem value={"true"}>Active</MenuItem>
                <MenuItem value={"false"}>Inactive</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Save Changes
              </Button>
              <Button
                sx={{ ml: 2 }}
                variant="outlined"
                onClick={() => navigate("/admin-products")}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
