import {
  Box,
  Typography,
  Button,
  Divider,
  Stack,
  Container,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/en";
import AnotherCourse from "../components/AnotherCourse";
import { useEffect, useState } from "react";
import { cartApi, productApi, scheduleApi } from "../apiService";
import { toRupiah } from "../helper";
import Swal from "sweetalert2";

export default function DetailKelas() {
  const navigate = useNavigate();
  const { id } = useParams();
  // const course = courses.find((item) => item.id === Number(id));
  const [course, setCourse] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const handleAddCart = async () => {
    try {
      const userId = Number(localStorage.getItem("id")); // PENTING: panggil fungsinya, cast ke number
      const token = localStorage.getItem("token");
      console.log(userId);
      const res = await cartApi.createCart(
        {
          userId, // atau hilangkan kalau backend ambil dari token
          productId: Number(id), // pastikan number
          scheduleId: selectedSchedule?.id,
          quantity: 1,
        },
        token
      );
      Swal.fire({
        title: "Success add to cart",
        icon: "success",
      });
    } catch (err) {
      console.error(err);
      // tambahkan penanganan error (toast/snackbar) di sini
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data: ProductId } = await productApi.getProductById(id); // { success, data, … }
        const { data: ProductList } = await productApi.getAllProducts(); // { success, data, … }
        const res = await scheduleApi.getAllSchedule();
        console.log(res);
        setCourse(ProductId ?? []); // keep only the list
        setSchedules(res ?? []);
        setCourses(ProductList ?? []);
        setSelectedSchedule(res[0] || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (!course) return <Typography>Course not found</Typography>;
  return (
    <>
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
          px={{ xs: 2, sm: 3 }}
        >
          <Box
            component="img"
            src={course.imageUrl}
            alt={course.title}
            sx={{
              width: { xs: "100%", md: "400px" },
              maxWidth: { xs: "100%" },
              height: { xs: "250px", sm: "267px" },
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
                {course.productTypeName}
              </Typography>

              <Typography
                variant="h5"
                fontWeight="bold"
                mt={1}
                sx={{
                  fontSize: { xs: "20px", sm: "22px" },
                }}
              >
                {course.name}
              </Typography>

              <Typography
                variant="h6"
                color="primary.main"
                mt={2}
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                }}
              >
                {toRupiah(course.price)}
              </Typography>

              <Box sx={{ width: "100%", maxWidth: "100%" }}>
                <TextField
                  select
                  fullWidth
                  label="Select Schedule"
                  value={selectedSchedule?.id ?? ""} // pakai id sebagai value
                  onChange={(e) => {
                    const sch = schedules.find(
                      (s) => s.id === Number(e.target.value) // temukan objeknya
                    );
                    setSelectedSchedule(sch);
                  }}
                  sx={{ mt: 3 }}
                >
                  {schedules.map(({ id, time }) => (
                    <MenuItem key={id} value={id}>
                      {dayjs(time).format("dddd, DD MMMM YYYY")}{" "}
                      {/* label tetap tanggal */}
                    </MenuItem>
                  ))}
                </TextField>
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
                  onClick={handleAddCart}
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

        <Container sx={{ mt: 4 }}>
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
            {course.description}
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
              <AnotherCourse
                course_id={course.id}
                course_title={course.name}
                course_image={course.imageUrl}
                course_price={course.price}
                course_type={course.productTypeNameName}
                index={idx}
              ></AnotherCourse>
            ))}
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
