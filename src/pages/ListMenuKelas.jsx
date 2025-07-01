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
import { useEffect, useState } from "react";
import { productApi, productTypeApi } from "../apiService";

const ListMenuKelas = () => {
  const [productType, setProductType] = useState([]);
  const navigate = useNavigate();
  const { type } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await productTypeApi.getProductTypeById(type); // { success, data, … }
        const { data: ProductByType } = await productApi.getProductByTypeId(
          type
        );
        setCourses(ProductByType);

        setProductType(res ?? []); // keep only the list
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
            image={productType.imageUrl}
            alt="SUV"
            sx={{ objectFit: "cover", width: "100vw", height: "294px" }}
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
              {productType.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              {productType.description}
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
                course_image={course.imageUrl}
                course_price={course.price}
                course_title={course.name}
                course_type={course.description}
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
