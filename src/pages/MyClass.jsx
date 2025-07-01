import { Box, Grid, Stack, Typography } from "@mui/material";

export default function MyClass() {
  return (
    <>
      <Grid
        container
        spacing={2}
        display={"flex"}
        alignItems="center"
        sx={{ mx: 2 }}
        maxWidth="1137px"
        marginTop={"50px"}
      >
        <Grid
          item
          xs={6}
          md={8}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          width={"100%"}
          marginLeft={"50px"}
        >
          <Box
            component="img"
            width={{ xs: "100%", md: "200px" }}
            height={{ xs: "100%", md: "133px" }}
            src="./palisade.png"
          ></Box>
          <Stack
            display={"flex"}
            flexDirection={"column"}
            margin={"20px"}
            width={"100%"}
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
    </>
  );
}
