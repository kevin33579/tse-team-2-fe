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
import { productTypeApi } from "../apiService.js";
import React, { useEffect, useState } from "react";

export default function BottomSection() {
  const navigate = useNavigate();

  const [carTypes, setCarTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await productTypeApi.getAllProductsType(); // { success, data, … }
        setCarTypes(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
        {!loading &&
          carTypes.map((x) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={x.id}>
              <Card
                sx={{
                  width: "200px",
                  height: "119px",
                  ":hover": { transform: "scale(1.05)", boxShadow: 3 },
                }}
                elevation={0}
                onClick={() => {
                  navigate("/list-menu-kelas/" + x.id);
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="66px"
                    width="100px"
                    image={x.imageUrl || "/no-image.png"}
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
                      {x.name}
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
