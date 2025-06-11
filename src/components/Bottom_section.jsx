import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const carTypes = [
  { id: 1, image: "./Electric.png", title: "Electric" },
  { id: 2, image: "./pajero.png", title: "SUV" },
  { id: 3, image: "./civic.png", title: "Sedan" },
  { id: 4, image: "./dump.png", title: "Truck" },
  { id: 5, image: "./brio.png", title: "Hatchback" },
  { id: 6, image: "./palisade.png", title: "Wagon" },
];

export default function Bottom_section() {
  return (
    <Box sx={{ padding: "60px 80px", textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: "#790B0A",
          mb: 5,
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        More car type you can choose
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {carTypes.map((type) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={type.id}>
            <Card
              elevation={0}
              sx={{
                width: 200,
                height: 120,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                borderRadius: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover img": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={type.image}
                alt={type.title}
                sx={{
                  width: 100,
                  height: 66,
                  objectFit: "cover",
                  borderRadius: 1,
                  border: "1px solid #ccc",
                  mb: 1,
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
              />
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                    color: "#000",
                  }}
                >
                  {type.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
