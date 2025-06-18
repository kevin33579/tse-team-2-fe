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

export default function MiddleSection() {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  // const url = "https://jsonplaceholder.typicode.com/posts";

  // const fetchData = () => {
  //   axios.get(url).then((e) => {
  //     setData(e.data);
  //   });
  // };

  // console.log(data);

  // useEffect(() => {
  //   fetchData();
  // });

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
                  image={course.image}
                  alt={course.title}
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
                    {course.type}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#333333",
                    }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#790B0A",
                      fontSize: "20px",
                      marginTop: "20px",
                    }}
                  >
                    {course.price}
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
