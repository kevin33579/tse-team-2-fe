import { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { productApi } from "../apiService";
import { toRupiah } from "../helper";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminProduct() {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await productApi.getAllProducts();
      setRows(res.data ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This action will delete the product.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await productApi.deleteProduct(id);
        Swal.fire("Deleted!", "Product has been deleted.", "success");
        fetchProducts();
      } catch (error) {
        console.error(error);
        Swal.fire({ icon: "error", title: "Delete failed" });
      }
    }
  };

  const filtered = rows.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <Box mb={3} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
        <Typography variant="h5" fontWeight="bold">
          Manage Products
        </Typography>
        <Box>
          <TextField
            size="small"
            placeholder="Search product…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: 250, pb:{xs: 2}, pr: 2 }}
          />
          <Button variant="contained" onClick={() => navigate("/add-product")}>
            Add Product
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white", textAlign: "center" }}>ID</TableCell>
              <TableCell sx={{ color: "white", textAlign: "left" }}>Name</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Price</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Stock</TableCell>
              <TableCell sx={{ color: "white", textAlign: "left" }}>Type</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Active</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Edit</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((p) => (
                <TableRow key={p.id}>
                  <TableCell sx={{ textAlign: "center" }}>{p.id}</TableCell>
                  <TableCell sx={{ textAlign: "left" }}>{p.name}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{toRupiah(p.price)}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{p.stock}</TableCell>
                  <TableCell sx={{ textAlign: "left" }}>{p.productTypeName}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{p.isActive ? "True" : "False"}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton
                      size="small"
                      onClick={() => navigate(`/edit-product/${p.id}`)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDelete(p.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
