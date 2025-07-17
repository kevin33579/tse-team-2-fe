import { useEffect, useState } from "react";
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
  IconButton,
} from "@mui/material";
import { scheduleApi } from "../apiService";
import Swal from "sweetalert2";
import { formatLongDate } from "../helper";
import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function AdminSchedules() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const result = await scheduleApi.getAllScheduleAdmin();
      setSchedules(result ?? []);
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to fetch schedule" });
    }
  };

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
        () => fetchSchedules()
      );
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to delete schedule", "error");
    }
  };

  const handleActivate = async (id) => {
    try {
      await scheduleApi.activateSchedule(id);
      Swal.fire({ icon: "success", title: "Activated" }).then(fetchSchedules);
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to activate" });
    }
  };

  const handleDeactivate = async (id) => {
    try {
      await scheduleApi.deactivateSchedule(id);
      Swal.fire({ icon: "success", title: "Deactivated" }).then(fetchSchedules);
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Failed to deactivate" });
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
        <Typography variant="h5" fontWeight="bold">
          All Schedules
        </Typography>
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
              <TableCell sx={{ color: "white", textAlign: "center" }}>ID</TableCell>
              <TableCell sx={{ color: "white", textAlign: "left" }}>Time</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Active</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Deactivate</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Activate</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {schedules.map((schedule) => (
              <TableRow key={schedule.id}>
                <TableCell sx={{ textAlign: "center" }}>{schedule.id}</TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  {formatLongDate(schedule.time)}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {schedule.isActive ? "True" : "False"}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDeactivate(schedule.id)}
                  >
                    <BlockIcon />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <IconButton
                    size="small"
                    color="success"
                    onClick={() => handleActivate(schedule.id)}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDelete(schedule.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {schedules.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                  No schedules found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
