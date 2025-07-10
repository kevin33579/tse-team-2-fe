import React, { useEffect, useState } from "react";
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
    (async () => {
      try {
        const res = await productApi.getAllProducts();
        setRows(res.data ?? []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await productApi.deleteProduct(id);
      setRows((prev) => prev.filter((p) => p.id !== id));
      Swal.fire({ icon: "success", title: `Product ${id} deleted` });
    } catch (error) {
      console.error(error);
      Swal.fire({ icon: "error", title: "Delete failed" });
    }
  };

  /* Filter rows by name or type (case‑insensitive) */
  const filtered = rows.filter((p) =>
    `${p.name} `.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      {/* search + actions row */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 2,
          alignItems: "center",
        }}
      >
        <TextField
          size="small"
          placeholder="Search product…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: { xs: "100%", sm: 280 } }}
        />

        <Button variant="contained" onClick={() => navigate("/add-product")}>
          Add Product
        </Button>
        <Button
          variant="contained"
          sx={{ ml: { xs: 0, sm: 1 } }}
          onClick={() => navigate("/admin-users")}
        >
          Users
        </Button>
        <Button
          variant="contained"
          sx={{ ml: { xs: 0, sm: 1 } }}
          onClick={() => navigate("/admin-type")}
        >
          Product Type
        </Button>
      </Box>

      {/* table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              {["ID", "Name", "Price", "Stock", "Type", "Edit", "Delete"].map(
                (h) => (
                  <TableCell key={h} sx={{ color: "white" }}>
                    {h}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{toRupiah(p.price)}</TableCell>
                <TableCell>{p.stock}</TableCell>
                <TableCell>{p.productTypeName}</TableCell>

                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => navigate(`/edit-product/${p.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>

                <TableCell>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => deleteProduct(p.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
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
