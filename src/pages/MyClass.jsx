import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { formatLongDate } from "../helper";
import { invoiceDetailApi } from "../apiService";

export default function MyClass() {
  const [classes, setClasses] = useState([]);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    (async () => {
      try {
        const res = await invoiceDetailApi.getIncomingClassByUser(userId); // { data: [...] }
        setClasses(res ?? []);
      } catch (err) {
        console.error(err);
        setClasses([]);
      }
    })();
  }, [userId]);

  if (classes.length === 0) {
    return (
      <Box p={4} sx={{ minHeight: "50vh" }}>
        <Typography>No upcoming classes.</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box px={{ xs: 2, sm: 4, md: 6 }} mt={4}>
        {classes.map((cls, idx) => (
          <Grid
            key={idx}
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            maxWidth="1137px"
            mx="auto"
            mb={4}
          >
            <Grid
              item
              xs={12}
              md={10}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              width="100%"
              ml={{ xs: 0, sm: "50px" }}
            >
              <Box
                component="img"
                src={cls.productImageUrl}
                alt={cls.productName}
                width={{ xs: "100%", md: 200 }}
                height={{ xs: "100%", md: 133 }}
                sx={{ objectFit: "contain" }}
              />
              <Stack flex={1} m={2}>
                <Typography fontFamily="Poppins" fontSize={14} color="#828282">
                  {cls.productTypeName}
                </Typography>
                <Typography fontFamily="Poppins" fontWeight={600} fontSize={24}>
                  {cls.productName}
                </Typography>
                <Typography
                  fontFamily="Montserrat"
                  fontWeight={500}
                  fontSize={20}
                  color="primary.main"
                >
                  Schedule&nbsp;:&nbsp;{formatLongDate(cls.scheduleTime)}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        ))}

        <Box sx={{ minHeight: "40vh" }}></Box>
      </Box>
    </>
  );
}
