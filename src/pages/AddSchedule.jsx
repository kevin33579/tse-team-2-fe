import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { scheduleApi } from "../apiService";
import Swal from "sweetalert2";

export default function AddSchedule() {
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  // Hitung tanggal minimum (besok)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0]; // format 'YYYY-MM-DD'

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await scheduleApi.createSchedule({ time });
      await Swal.fire({
        icon: "success",
        title: "Schedule created successfully",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/admin-schedule");
    } catch (error) {
      console.error(error);
      Swal.fire({ icon: "error", title: "Failed to create schedule" });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Add Schedule
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Schedule Date"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={time}
                inputProps={{
                  min: minDateStr,
                }}
                onChange={(e) => setTime(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Add Schedule
              </Button>
              <Button
                sx={{ ml: 2 }}
                variant="outlined"
                onClick={() => navigate("/admin-schedule")}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
