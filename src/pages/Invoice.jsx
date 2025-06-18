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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        invoiceNumber: "INV-001",
        date: "2025-06-10",
        totalCourse: 2,
        totalPrice: 300000,
      },
      {
        id: 2,
        invoiceNumber: "INV-002",
        date: "2025-06-11",
        totalCourse: 1,
        totalPrice: 150000,
      },
      {
        id: 3,
        invoiceNumber: "INV-003",
        date: "2025-06-12",
        totalCourse: 3,
        totalPrice: 450000,
      },
    ];
    setInvoices(dummyData);
  }, []);

  return (
    <>
      <Navbar />
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
                  <TableCell>{invoice.invoiceNumber}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.totalCourse}</TableCell>
                  <TableCell>
                    IDR {invoice.totalPrice.toLocaleString()}
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
      <Footer />
    </>
  );
};

export default Invoice;
