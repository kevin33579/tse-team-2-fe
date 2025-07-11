import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { productTypeApi } from "../apiService"; // adjust if your import is different
import Swal from "sweetalert2";

export default function EditProductType() {
  const { id } = useParams(); // from route like /product-types/edit/:id
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const fetchProductType = async () => {
      try {
        const data = await productTypeApi.getProductTypeById(id);
        console.log(data);
        setName(data.name || "");
        setDescription(data.description || "");
        setImageUrl(data.imageUrl || "");
        setIsActive(data.isActive ?? true);
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to fetch product type data", "error");
      }
    };

    fetchProductType();
  }, [id]);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const payload = { id, name, description, imageUrl, isActive };
      await productTypeApi.editProductsType(payload, id);
      Swal.fire("Success", "Product type updated successfully", "success");
      navigate("/admin-type"); // redirect after edit
    } catch (err) {
      Swal.fire("Error", err.message || "Update failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          Edit Product Type
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={3}
          />
          <TextField
            label="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
          />
          <TextField
            select
            label="Status"
            value={isActive ? "true" : "false"}
            onChange={(e) => setIsActive(e.target.value === "true")}
            SelectProps={{ native: true }}
            fullWidth
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Product Type"}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
