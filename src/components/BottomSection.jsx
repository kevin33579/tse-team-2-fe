import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const carTypes = [
  { id: 1, image: "./Electric.png", title: "Electric" },
  { id: 2, image: "./hatchback.png", title: "Hatchback" },
  { id: 3, image: "./brio.png", title: "LCGC" },
  { id: 4, image: "./mpv.png", title: "MPV" },
  { id: 5, image: "./offroad.png", title: "Offroad" },
  { id: 6, image: "./sedan.png", title: "Sedan" },
  { id: 7, image: "./suv.png", title: "SUV" },
  { id: 8, image: "./truck.png", title: "Truck" },
];

export default function BottomSection() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: "60px 80px",
        textAlign: "center",
        marginTop: { xs: "500px", md: "100px" },
      }}
    >
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
      <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{ maxWidth: "1108px", margin: "auto" }}
      >
        {carTypes.map((x) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={x.id}>
            <Card
              sx={{
                width: "200px",
                height: "119px",
                ":hover": { transform: "scale(1.05)", boxShadow: 3 },
              }}
              elevation={0}
              onClick={() => {
                navigate("/list-menu-kelas/" + x.title);
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="66px"
                  width="100px"
                  image={x.image}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "24px",
                    }}
                  >
                    {x.title}
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
