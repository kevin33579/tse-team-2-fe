import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function AnotherCourse({
  course_id,
  course_type,
  course_image,
  course_title,
  course_price,
  index,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Grid item xs={12} sm={6} key={index}>
        <Card
          elevation={0}
          sx={{
            width: { xs: "200px", md: "350px" },
            height: "100%",
            ml: { xs: "70px", md: "0px" },
          }}
        >
          <CardActionArea onClick={() => navigate(`/detail/${course_id}`)}>
            <CardMedia
              component="img"
              sx={{
                height: { md: "233px", xs: "100px" },
              }}
              image={course_image}
              alt={course_title}
            />
            <CardContent>
              <Typography variant="caption" color="text.secondary">
                {course_type}
              </Typography>
              <Typography fontWeight="bold">{course_title}</Typography>
              <Typography
                color="primary.main"
                fontWeight="bold"
                sx={{ fontSize: "20px", fontWeight: "600" }}
              >
                {course_price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}
