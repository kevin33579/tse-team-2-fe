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
import { invoiceDetailApi } from "../apiService";
import { formatLongDate, toRupiah } from "../helper";

const InvoiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const res = await invoiceDetailApi.getInvoiceById(id); // { data: [...] }
        setCourses(res ?? []);
        console.log(res);
        // header info from first row
      } catch (err) {
        console.error(err);
      }
    };

    fetchInvoice();
  }, [id]);

  if (!courses) {
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
        {courses.length > 0 && (
          <Box mb={2}>
            <Typography>No. Invoice: {courses[0].invoiceCode}</Typography>
            <Typography>
              Date: {formatLongDate(courses[0].invoiceDate)}
            </Typography>
            <Typography>
              Total Price: {toRupiah(courses[0].invoiceTotalPrice)}
            </Typography>
          </Box>
        )}

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
              {courses.map((course, index) => (
                <TableRow key={course.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{course.productName}</TableCell>
                  <TableCell>{course.productTypeName}</TableCell>
                  <TableCell>{formatLongDate(course.scheduleTime)}</TableCell>
                  <TableCell> {toRupiah(course.productPrice)}</TableCell>
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
