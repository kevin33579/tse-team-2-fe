import { useEffect, useState } from "react";
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
        fetchProductTypes();
      } catch (err) {
        console.error("Delete failed:", err);
        Swal.fire("Error", err.message || "Failed to delete.", "error");
      }
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box mb={3}>
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Manage Product Types
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/add-product-type")}
        >
          Add Product Type
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white", textAlign: "center" }}>ID</TableCell>
              <TableCell sx={{ color: "white", textAlign: "left" }}>Name</TableCell>
              <TableCell sx={{ color: "white", textAlign: "left" }}>Description</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Image</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Active</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productTypes.length > 0 ? (
              productTypes.map((type) => (
                <TableRow key={type.id}>
                  <TableCell sx={{ textAlign: "center" }}>{type.id}</TableCell>
                  <TableCell sx={{ textAlign: "left" }}>{type.name}</TableCell>
                  <TableCell sx={{ textAlign: "left", maxWidth: 200, wordWrap: "break-word" }}>
                    {type.description}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {type.imageUrl ? (
                      <Box
                        component="img"
                        src={type.imageUrl}
                        alt="Product Type"
                        sx={{
                          height: 120,
                          width: 160,
                          objectFit: "cover",
                          borderRadius: 1,
                        }}
                      />
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {type.isActive ? "True" : "False"}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton color="primary" onClick={() => handleEdit(type.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(type.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
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
