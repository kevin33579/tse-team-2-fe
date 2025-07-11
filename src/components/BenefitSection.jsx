import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Grid, styled } from "@mui/system";
import benefitImage from "../assets/benefit.png";

export default function BenefitSection() {
  return (
    <>
      <Box marginTop={"100px"}></Box>
      <Grid
        container
        direction={"row"}
        size={{ xs: 12, md: 8 }}
        justifyContent={"center"}
        sx={{ maxWidth: 1108, margin: "auto", maxHeight: "280px" }}
      >
        <Grid
          item
          size={{ xs: 12, md: 8 }}
          sx={{ padding: { xs: "20px", md: "0px" } }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "32px",
              color: "#790B0A",
              fontWeight: "600",
            }}
          >
            Gets Your Best Benefit
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: { md: "16px", xs: "12px" },
              fontWeight: "300",
              marginTop: "20px",
              textAlign: "justify",
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: { md: "16px", xs: "12px" },
              fontWeight: "300",
              marginTop: "20px",
              textAlign: "justify",
            }}
          >
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            sx={{
              height: { md: "280px", xs: "300px" },
              width: { md: "373px", xs: "350px" },
            }}
            alt="logo"
            src={benefitImage}
          />
        </Grid>
      </Grid>
      <Grid></Grid>
      <Box marginBottom={"100px"}></Box>
    </>
  );
}
