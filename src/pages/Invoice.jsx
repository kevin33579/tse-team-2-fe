import { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography,
  TableContainer,
  Paper,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { invoiceApi } from "../apiService";
import { formatLongDate } from "../helper";

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("id");

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await invoiceApi.getInvoiceByUser(userId); // { success, data }
        setInvoices(res.data ?? []); // keep only list
      } catch (err) {
        console.error(err);
        setInvoices([]);
      }
    };
    fetchInvoices();
  }, [userId]);

  return (
    <>
      <Box px={{ xs: 1, sm: 2, md: 4 }} py={4}>
        <Typography variant="h5" mb={2}>
          Menu Invoice
        </Typography>

        <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "primary.main" }}>
                <TableCell sx={{ color: "white", minWidth: 50 }}>No</TableCell>
                <TableCell sx={{ color: "white", minWidth: 120 }}>
                  No. Invoice
                </TableCell>
                <TableCell sx={{ color: "white", minWidth: 100 }}>
                  Date
                </TableCell>
                <TableCell sx={{ color: "white", minWidth: 120 }}>
                  Total Course
                </TableCell>
                <TableCell sx={{ color: "white", minWidth: 120 }}>
                  Total Price
                </TableCell>
                <TableCell sx={{ color: "white", minWidth: 100 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice, index) => (
                <TableRow key={invoice.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{invoice.invoiceCode}</TableCell>
                  <TableCell>{formatLongDate(invoice.date)}</TableCell>
                  <TableCell>{invoice.totalCourse}</TableCell>
                  <TableCell>
                    IDR {invoice.totalPrice?.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => navigate(`/invoice/${invoice.id}`)}
                      size="small"
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Invoice;
