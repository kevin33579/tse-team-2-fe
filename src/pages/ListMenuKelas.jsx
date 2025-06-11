import React from "react";
import {
  Stack,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  Divider,
  CardActionArea,
} from "@mui/material";
import palisadeImg from "../assets/image3-1.png";
import suvInova from "../assets/Rectangle 12-6.png";
import hyundaiPalisade from "../assets/Rectangle 12-7.png";
import suzukiXl7 from "../assets/Rectangle 12-8.png";
import pajero from "../assets/Rectangle 12-9.png";
import fortunner from "../assets/Rectangle 12-10.png";
import mazdaCx5 from "../assets/Rectangle 12-11.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const courses = [
  { title: "Course SUV Kijang Innova", price: "IDR 700.000", image: suvInova },
  {
    title: "Hyundai Palisade 2021",
    price: "IDR 800.000",
    image: hyundaiPalisade,
  },
  { title: "Course Suzuki XL7", price: "IDR 600.000", image: suzukiXl7 },
  { title: "Course Mitsubishi Pajero", price: "IDR 800.000", image: pajero },
  { title: "SUV Toyota Fortunner", price: "IDR 850.000", image: fortunner },
  {
    title: "Premium Mazda CX-5 Course",
    price: "IDR 1.000.000",
    image: mazdaCx5,
  },
];

const ListMenuKelas = () => {
  const theme = useTheme();

  return (
    <>
      <Navbar />
      <Stack sx={{ pt: { xs: 4, sm: 6 }, pb: { xs: 4, sm: 6 } }}>
          <Card elevation={0}>
            <CardMedia
              component="img"
              image={palisadeImg}
              height="300"
              alt="SUV"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: { xs: 1, sm: 2 } }}
              >
                SUV
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
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

      {/* Course List Section */}
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
                <Card elevation={0} >
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
};

export default ListMenuKelas;
