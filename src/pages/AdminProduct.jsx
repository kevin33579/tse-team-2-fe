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
import { productApi, scheduleApi } from "../apiService"; // adjust path if different
import { formatLongDate, toRupiah } from "../helper"; // currency formatter
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminProduct() {
  const [rows, setRows] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await productApi.getAllProducts();
        const res2 = await scheduleApi.getAllSchedule();
        setSchedule(res2);
        setRows(res.data ?? []); // API wraps in { success,data }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const res = await productApi.deleteProduct(id);
      Swal.fire({
        title: `Success Delete Product ${id}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
