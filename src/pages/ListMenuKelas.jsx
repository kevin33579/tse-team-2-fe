import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import palisadeImg from "../assets/image3-1.png";

import { useNavigate, useParams } from "react-router-dom";
import AnotherCourse from "../components/AnotherCourse";

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

const ListMenuKelas = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  return (
    <>
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
              {type}
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
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            {courses.map((course, idx) => (
              <AnotherCourse
                course_id={course.id}
                course_image={course.image}
                course_price={course.price}
                course_title={course.title}
                course_type={course.type}
                index={idx}
              ></AnotherCourse>
            ))}
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default ListMenuKelas;
