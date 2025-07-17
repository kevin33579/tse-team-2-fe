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

export default function Invoice() {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("id");

  useEffect(() => {
    (async () => {
      try {
        const res = await invoiceApi.getInvoiceByUser(userId);
        setInvoices(res.data ?? []);
      } catch (err) {
        console.error(err);
        setInvoices([]);
      }
    })();
  }, [userId]);

  return (
    <Box sx={{ minHeight: "80vh" }} px={{ xs: 1, sm: 2, md: 4 }} py={4}>
      {invoices.length === 0 ? (
        /* ───── empty‑state ───── */
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
            color: "text.secondary",
            fontStyle: "italic",
          }}
        >
          <Typography>No invoices yet.</Typography>
        </Box>
      ) : (
        <Box
          sx={{
            textAlign: "left",
            mt: 6,
            color: "text.primary",
          }}
        >
          <Typography variant="h5" mb={2}>
            Menu Invoice
          </Typography>
          <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "primary.main" }}>
                  <TableCell sx={{ color: "white", minWidth: 50 }}>
                    No
                  </TableCell>
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
                {invoices.map((inv, idx) => (
                  <TableRow key={inv.id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{inv.invoiceCode}</TableCell>
                    <TableCell>{formatLongDate(inv.date)}</TableCell>
                    <TableCell>{inv.totalCourse}</TableCell>
                    <TableCell>
                      IDR {inv.totalPrice?.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => navigate(`/invoice/${inv.id}`)}
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
      )}
    </Box>
  );
}
