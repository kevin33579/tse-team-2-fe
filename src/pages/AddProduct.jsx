import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { productApi, productTypeApi } from "../apiService"; // adjust path
import Swal from "sweetalert2";

export default function AddProduct() {
  const navigate = useNavigate();
  const [types, setTypes] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    imageUrl: "",
    productTypeId: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await productTypeApi.getAllProductsType();
        setTypes(res ?? []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productApi.createProduct({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      });
      await Swal.fire({
        icon: "success",
        title: "Product created",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/admin-products"); // back to list
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to create product" });
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Add New Product
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
                sx={{ width: "200px" }}
                required
              >
                {types.map((t) => (
                  <MenuItem key={t.id} value={t.id}>
                    {t.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Save Product
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
