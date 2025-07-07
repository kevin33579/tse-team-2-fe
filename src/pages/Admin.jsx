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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { productApi } from "../apiService"; // adjust path if different
import { toRupiah } from "../helper"; // currency formatter

export default function Admin() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await productApi.getAllProducts();
        setRows(res.data ?? []); // API wraps in { success,data }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <Box p={4}>
      <Button
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => navigate("/add-product")}
      >
        Add Product
      </Button>
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
            {rows.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{toRupiah(p.price)}</TableCell>
                <TableCell>{p.stock}</TableCell>
                <TableCell>{p.productTypeName}</TableCell>

                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => alert(`edit ${p.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>

                <TableCell>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => alert(`delete ${p.id}`)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
