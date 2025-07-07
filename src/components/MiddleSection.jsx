import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { productApi } from "../apiService.js";

export default function MiddleSection() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const toRupiah = (n) =>
    n?.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    });

  useEffect(() => {
    (async () => {
      try {
        const res = await productApi.getAllProductsLimit(); // { success, data, … }
        setCourses(res.data ?? []); // keep only the list
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box sx={{ mt: 6, textAlign: "center", px: { xs: 2, sm: 3 } }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: "#790b0a",
          mb: 5,
          fontFamily: "Montserrat",
          fontSize: { xs: "24px", sm: "32px" },
        }}
      >
        Join Us For The Course
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        textAlign={"left"}
        sx={{ maxWidth: 1400, margin: "0 auto" }}
      >
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "399px",
                width: "350px",
                ":hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
              }}
              onClick={() => {
                navigate("/detail/" + course.id);
              }}
              elevation={0}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="233px"
                  image={course.imageUrl || "/no-image.png"}
                  alt={course.name}
                />
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#828282",
                    }}
                  >
                    {` ${course.productTypeName}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#333333",
                    }}
                  >
                    {course.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#790B0A",
                      fontSize: "20px",
                      marginTop: "20px",
                    }}
                  >
                    {toRupiah(course.price)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
