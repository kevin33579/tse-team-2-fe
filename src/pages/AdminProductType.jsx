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
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminProductType() {
  const [productTypes, setProductTypes] = useState([]);
  const navigate = useNavigate();

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
    navigate(`/edit-product-type/${id}`);
    // Open modal / navigate / populate form
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This action will delete the product type.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await productTypeApi.deleteProductsType(id);
        Swal.fire("Deleted!", "Product type has been deleted.", "success");
        // Refresh list (call your fetch function here)
        fetchProductTypes(); // <- replace with your actual fetch function
      } catch (err) {
        console.error("Delete failed:", err);
        Swal.fire("Error", err.message || "Failed to delete.", "error");
      }
    }
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
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
          onClick={() => {
            navigate("/add-product-type");
          }}
        >
          Add Product Type
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              {["ID", "Name", "Description", "ImageUrl", "Actions"].map((h) => (
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
                  <TableCell>{type.description}</TableCell>
                  <TableCell>{type.imageUrl}</TableCell>
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
