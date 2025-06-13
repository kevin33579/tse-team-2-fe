import React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardActionArea from "@mui/material/CardActionArea";
import palisadeImg from "../assets/image3-1.png";
import suvInova from "../assets/Rectangle 12-6.png";
import hyundaiPalisade from "../assets/Rectangle 12-7.png";
import suzukiXl7 from "../assets/Rectangle 12-8.png";
import pajero from "../assets/Rectangle 12-9.png";
import fortunner from "../assets/Rectangle 12-10.png";
import mazdaCx5 from "../assets/Rectangle 12-11.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/montserrat";
import { useNavigate } from "react-router-dom";

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

const ListMenuKelas = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Stack
        sx={{
          pb: { xs: 4, sm: 6 },
          fontFamily: "Montserrat",
          backgroundColor: "white",
        }}
      >
        <Card elevation={0}>
          <CardMedia
            component="img"
            image={palisadeImg}
            height="10%"
            alt="SUV"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: { xs: 1, sm: 2 },
                fontSize: { xs: "1.125rem", sm: "1.5rem" },
              }}
            >
              SUV
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
        </Card>
      </Stack>

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
      <Stack
        sx={{
          pt: { xs: 3, sm: 5 },
          pb: { xs: 3, sm: 5 },
          fontFamily: "Montserrat",
          backgroundColor: "white",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: { xs: 2, sm: 3 },
              textAlign: "center",
              fontSize: { xs: "1.125rem", sm: "1.5rem" },
            }}
          >
            Another favorite course
          </Typography>

          <Grid container spacing={{ xs: "2rem", sm: "3rem" }}>
            {courses.map((course, idx) => (
              <Grid
                item
                xs={4}
                sm={4}
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  elevation={1}
                  sx={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea
                    onClick={() => navigate(`/list-menu-kelas/${course.id}`)}
                    sx={{ height: "100%" }}
                  >
                    <CardMedia
                      component="img"
                      image={course.image}
                      alt={course.title}
                      sx={{
                        width: "100%",
                        aspectRatio: "16 / 9",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
                      >
                        SUV
                      </Typography>
                      <Typography
                        fontWeight="bold"
                        sx={{
                          pb: { xs: 1, sm: 2 },
                          fontSize: { xs: "0.95rem", sm: "1.1rem" },
                        }}
                      >
                        {course.title}
                      </Typography>
                      <Typography
                        color="primary.main"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                      >
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
};

export default ListMenuKelas;
