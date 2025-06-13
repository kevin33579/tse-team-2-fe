import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  Stack,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const courses = [
  {
    id: 1,
    image: "/inova.png",
    type: "SUV",
    title: "Course SUV Kijang Innova",
    price: "IDR 700.000",
  },
  {
    id: 2,
    image: "/brio.png",
    type: "LCGC",
    title: "Course LCGC Honda Brio",
    price: "IDR 500.000",
  },
  {
    id: 3,
    image: "/palisade.png",
    type: "SUV",
    title: "Hyundai Palisade 2021",
    price: "IDR 800.000",
  },
  {
    id: 4,
    image: "/pajero.png",
    type: "SUV",
    title: "Course Mitsubishi Pajero",
    price: "IDR 800.000",
  },
  {
    id: 5,
    image: "/dump.png",
    type: "Truck",
    title: "Dump Truck for Mining Constructor",
    price: "IDR 1.200.000",
  },
  {
    id: 6,
    image: "/civic.png",
    type: "Sedan",
    title: "Sedan Honda Civic",
    price: "IDR 400.000",
  },
  {
    id: 7,
    title: "SUV Toyota Fortunner",
    price: "IDR 850.000",
    image: "/Fortuner.png",
  },
  {
    id: 8,
    title: "Premium Mazda CX-5 Course",
    price: "IDR 1.000.000",
    image: "/mazda.png",
  },
  {
    id: 9,
    title: "Course Suzuki XL7",
    price: "IDR 600.000",
    image: "/suzuki.png",
  },
];

export default function DetailKelas() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === Number(id));

  if (!course) return <Typography>Course not found</Typography>;
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 4,
          mb: 4,
        }}
      >
        <Box width="1140px" display="flex">
          <Box
            component="img"
            src={course.image}
            alt={course.title}
            sx={{
              width: "400px",
              height: "266.6666564941406px",
              border: "1px solid #000",
              objectFit: "cover",
              marginRight: 3,
            }}
          />

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Box>
              <Typography variant="h6" color="text.secondary">
                {course.type}
              </Typography>

              <Typography variant="h5" fontWeight="bold" mt={1}>
                {course.title}
              </Typography>

              <Typography variant="h6" color="primary.main" mt={2}>
                {course.price}
              </Typography>

              <TextField
                type="date"
                label="Select Date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{ mt: 3 }}
              />

              <Box display="flex" gap={2} mt={3}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    border: "1px solid #ccc",
                    "&:hover": {
                      bgcolor: "#f0f0f0",
                    },
                  }}
                >
                  Add to Cart
                </Button>

                <Button variant="contained" color="primary">
                  Buy Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          width="1140px"
          mt={4}
          sx={{
            fontFamily: "Montserrat",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0%",
              fontFamily: "Montserrat",
              mb: 1,
            }}
          >
            Description
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              fontFamily: "Montserrat",
              color: "#333333",
              mt: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              fontFamily: "Montserrat",
              color: "#333333",
              mt: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          width: "100%",
          borderColor: "grey.300",
          borderBottomWidth: "2px",
          mb: { xs: 3, sm: 4 },
        }}
      />

      <Stack sx={{ pt: { xs: 3, sm: 5 }, pb: { xs: 3, sm: 5 } }}>
        <Container>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: { xs: 2, sm: 3 },
              textAlign: "center",
            }}
          >
            Another favorite course
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 4 }}>
            {courses.map((course, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Card elevation={0}>
                  <CardActionArea
                    onClick={() => alert(`Kamu memilih: ${course.title}`)}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={course.image}
                      alt={course.title}
                    />
                    <CardContent>
                      <Typography variant="caption" color="text.secondary">
                        SUV
                      </Typography>
                      <Typography
                        fontWeight="bold"
                        sx={{ pb: { xs: 2, sm: 4 } }}
                      >
                        {course.title}
                      </Typography>
                      <Typography color="primary.main" fontWeight="bold">
                        {course.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
      <Footer />
    </>
  );
}
