import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { productTypeApi } from "../apiService";

export default function AdminProductType() {
  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    fetchProductTypes();
  }, []);

  const fetchProductTypes = async () => {
    try {
      const data = await productTypeApi.getAllProductsTypeAdmin();
      setProductTypes(data);
    } catch (err) {
      console.error("Failed to fetch product types:", err);
    }
  };

  const handleEdit = (id) => {
    console.log("Edit product type with ID:", id);
    // Open modal / navigate / populate form
  };

  const handleDelete = (id) => {
    console.log("Delete product type with ID:", id);
    // Confirm and call delete API
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold">
          Manage Product Types
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} color="primary">
          Add Product Type
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              {["ID", "Name", "Actions"].map((h) => (
                <TableCell key={h} sx={{ color: "white" }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {productTypes.length > 0 ? (
              productTypes.map((type) => (
                <TableRow key={type.id}>
                  <TableCell>{type.id}</TableCell>
                  <TableCell>{type.name}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleEdit(type.id)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(type.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No product types available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
