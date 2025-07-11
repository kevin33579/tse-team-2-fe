import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { scheduleApi } from "../apiService"; // ← Adjust path as needed
import Swal from "sweetalert2";
import { formatLongDate } from "../helper";

export default function AdminSchedules() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await scheduleApi.getAllSchedule();
        setSchedules(result ?? []);
      } catch (err) {
        console.error(err);
        Swal.fire({ icon: "error", title: "Failed to fetch schedule" });
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      await scheduleApi.deleteSchedule(id);
      Swal.fire("Deleted!", "Schedule has been deleted.", "success").then(
        () => {
          window.location.reload();
        }
      );
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to delete schedule", "error");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5">All Schedules</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => (window.location.href = "/add-schedule")}
        >
          Add Schedule
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              {["ID", "Time", "Actions"].map((h) => (
                <TableCell key={h} sx={{ color: "white" }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {schedules.map((schedule) => (
              <TableRow key={schedule.id}>
                <TableCell>{schedule.id}</TableCell>
                <TableCell> {formatLongDate(schedule.time)}</TableCell>
                <TableCell>
                  <Button
                    color="error"
                    variant="outlined"
                    size="small"
                    onClick={() => handleDelete(schedule.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
