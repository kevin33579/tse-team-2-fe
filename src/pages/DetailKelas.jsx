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
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/en";
import Another_Course from "../components/Another_course";
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
    title: "Course Suzuki XL7",
    type: "SUV",
    price: "IDR 600.000",
    image: "/suzuki.png",
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
    title: "SUV Toyota Fortunner",
    type: "SUV",
    price: "IDR 850.000",
    image: "/Fortuner.png",
  },
  {
    id: 6,
    title: "Premium Mazda CX-5 Course",
    type: "SUV",
    price: "IDR 1.000.000",
    image: "/mazda.png",
  },
];
export default function DetailKelas() {
  const navigate = useNavigate();
  const { id } = useParams();
  const course = courses.find((item) => item.id === Number(id));

  const [selectedDate, setSelectedDate] = useState(dayjs());

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
        <Box
          width="100%"
          maxWidth="1140px"
          mx="auto"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          px={{xs: 2, sm:3}}
        >
          <Box
            component="img"
            src={course.image}
            alt={course.title}
            sx={{
              width: { xs: "100%", md: "400px" },
              maxWidth:{xs:"100%"},
              height:  { xs: "250px", sm: "267px" },
              border: "1px solid #000",
              objectFit: "cover",
              marginRight: 3,
              mb: { xs: 0, md: 0 },
              mr: { md: 3 },
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

              <Typography
                variant="h5"
                fontWeight="bold"
                mt={1}
                sx={{
                  fontSize: { xs: "20px", sm: "22px" },
                }}
              >
                {course.title}
              </Typography>

              <Typography
                variant="h6"
                color="primary.main"
                mt={2}
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                }}
              >
                {course.price}
              </Typography>

              <Box sx={{width:"100%", maxWidth:"100%"}}>
              <DatePicker
                label="Select Schedule"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                format="dddd, DD MMMM YYYY" // 📅 custom format
                slotProps={{
                  textField: {
                    sx: { mt: 3, width: "100%", },
                  },
                }}
              />
              </Box>

              <Box
                display="flex"
                gap={2}
                mt={3}
                flexDirection={{ xs: "column", sm: "row" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    borderColor: "primary.main",
                    "&:hover": {
                      bgcolor: "#f0f0f0",
                    },
                    width: { xs: "100%", sm: "233px" },
                  }}
                  onClick={() => alert(" success add to cart")}
                >
                  <Typography
                    fontFamily="Montserrat"
                    fontSize={{ xs: "14px", sm: "16px" }}
                  >
                    Add to Cart
                  </Typography>
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: "100%", sm: "233px" } }}
                  onClick={() => {
                    navigate("/checkout");
                  }}
                >
                  <Typography
                    fontFamily="Montserrat"
                    fontSize={{ xs: "14px", sm: "16px" }}
                  >
                    Buy Now
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Container sx={{mt:4}}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "20px", sm: "24px" },
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
              fontSize: { xs: "14px", sm: "16px" },
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
        </Container>
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
              fontSize: { xs: "16px", sm: "20px" },
            }}
          >
            Another favorite course
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 4 }} width="100%">
            {courses.map((course, idx) => (
              <Another_Course
                course_id={course.id}
                course_title={course.title}
                course_image={course.image}
                course_price={course.price}
                course_type={course.type}
                index={idx}
              ></Another_Course>
            ))}
          </Grid>
        </Container>
      </Stack>

      <Footer />
    </>
  );
}
