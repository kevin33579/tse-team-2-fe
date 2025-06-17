import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

export default function MyClass() {
  return (
    <>
      <Navbar></Navbar>
      <Grid
        container
        spacing={2}
        display={"flex"}
        alignItems="center"
        sx={{mx:2}}
        maxWidth="1137px"
        marginTop={"50px"}
      >
        <Grid item xs= {6} md= {8} display={"flex"} flexDirection={{xs:"column",sm:"row"}}>
          <Box component="img" width="100%" src="./palisade.png"></Box>
          <Stack
            display={"flex"}
            flexDirection={"column"}
            margin={"20px"}
            gap={2}
          >
            <Typography
              fontFamily={"Poppins"}
              fontWeight={"400"}
              fontSize={"14px"}
              color="#828282"
            >
              SUV
            </Typography>
            <Typography
              fontFamily={"Poppins"}
              fontWeight={"600"}
              fontSize={"24px"}
            >
              Hyundai Palisade
            </Typography>
            <Typography
              fontFamily={"Montserrat"}
              fontWeight={"500"}
              fontSize={"20px"}
              color="primary.main"
            >
              Schedule : Wednesday, 27 July 2022
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
}
