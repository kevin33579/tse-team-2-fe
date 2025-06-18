import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  TableContainer,
  Paper,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const InvoiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(null);

  const dummyDetails = [
    {
      id: "1",
      invoiceNumber: "INV-001",
      date: "2025-06-10",
      totalPrice: 300000,
      courses: [
        {
          id: 1,
          name: "Hyundai Palisade",
          type: "SUV",
          schedule: "2025-06-15",
          price: 150000,
        },
        {
          id: 2,
          name: "Hyundai Palisade",
          type: "SUV",
          schedule: "2025-06-16",
          price: 150000,
        },
      ],
    },
    {
      id: "2",
      invoiceNumber: "INV-002",
      date: "2025-06-11",
      totalPrice: 150000,
      courses: [
        {
          id: 3,
          name: "Hyundai Palisade",
          type: "SUV",
          schedule: "2025-06-18",
          price: 150000,
        },
      ],
    },
    {
      id: "3",
      invoiceNumber: "INV-003",
      date: "2025-06-12",
      totalPrice: 450000,
      courses: [
        {
          id: 4,
          name: "Hyundai Palisade",
          type: "SUV",
          schedule: "2025-06-19",
          price: 200000,
        },
        {
          id: 5,
          name: "Hyundai Palisade",
          type: "SUV",
          schedule: "2025-06-20",
          price: 150000,
        },
        {
          id: 6,
          name: "Hyundai Palisade",
          type: "SUV",
          schedule: "2025-06-21",
          price: 100000,
        },
      ],
    },
  ];

  useEffect(() => {
    const found = dummyDetails.find((item) => item.id === id);
    setInvoice(found);
  }, [id]);

  if (!invoice) {
    return (
      <Box p={4}>
        <Typography>Invoice not found.</Typography>
        <Button variant="outlined" onClick={() => navigate("/invoice")}>
          Back to Invoice
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Box px={{ xs: 1, sm: 2, md: 4 }} py={4}>
        <Typography variant="h5" mb={2}>
          Details Invoice
        </Typography>

        <Box mb={2}>
          <Typography>No. Invoice: {invoice.invoiceNumber}</Typography>
          <Typography>Date: {invoice.date}</Typography>
          <Typography>
            Total Price: IDR {invoice.totalPrice.toLocaleString()}
          </Typography>
        </Box>

        <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "primary.main" }}>
                <TableCell sx={{ color: "white", minWidth: 50 }}>No</TableCell>
                <TableCell sx={{ color: "white", minWidth: 150 }}>
                  Course Name
                </TableCell>
                <TableCell sx={{ color: "white", minWidth: 100 }}>
                  Type
                </TableCell>
                <TableCell sx={{ color: "white", minWidth: 120 }}>
                  Schedule
                </TableCell>
                <TableCell sx={{ color: "white", minWidth: 120 }}>
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoice.courses.map((course, index) => (
                <TableRow key={course.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.type}</TableCell>
                  <TableCell>{course.schedule}</TableCell>
                  <TableCell>IDR {course.price.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default InvoiceDetail;
