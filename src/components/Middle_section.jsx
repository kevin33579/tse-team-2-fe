import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const courses = [
  {
    id: 1,
    image: "./inova.png",
    type: "SUV",
    title: "Course SUV Kijang Innova",
    price: "IDR 700.000",
  },
  {
    id: 2,
    image: "./brio.png",
    type: "LCGC",
    title: "Course LCGC Honda Brio",
    price: "IDR 500.000",
  },
  {
    id: 3,
    image: "./palisade.png",
    type: "SUV",
    title: "Hyundai Palisade 2021",
    price: "IDR 800.000",
  },
  {
    id: 4,
    image: "./pajero.png",
    type: "SUV",
    title: "Course Mitsubishi Pajero",
    price: "IDR 800.000",
  },
  {
    id: 5,
    image: "./dump.png",
    type: "Truck",
    title: "Dump Truck for Mining Constructor",
    price: "IDR 1.200.000",
  },
  {
    id: 6,
    image: "./civic.png",
    type: "Sedan",
    title: "Sedan Honda Civic",
    price: "IDR 400.000",
  },
];

export default function Middle_section() {
  return (
    <Box sx={{ mt: 6, textAlign: "center", px: 2 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, color: "#790b0a", mb: 5 }}
      >
        Join Course
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: 1400, margin: "0 auto" }}
      >
        {courses.map((course, index) => (
          <Grid item key={`${course.id}-${index}`} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: 400,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "none",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{
                  height: 233,
                  objectFit: "cover",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  m: 2,
                }}
              />
              <CardContent sx={{ textAlign: "left", px: 2 }}>
                <Typography variant="body2" sx={{ color: "#828282" }}>
                  {course.type}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 500, mt: 1, color: "#333" }}
                >
                  {course.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mt: 1, color: "#790b0a" }}
                >
                  {course.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
