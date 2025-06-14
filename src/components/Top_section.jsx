import React from "react";
import { Box, Typography, Stack, useTheme } from "@mui/material";

export default function Top_section() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: "400px", sm: "496px" },
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="./top.png"
        alt="Driving lessons"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          gap: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 4 },
          pointerEvents: "none",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: "#fff",
            mb: 2,
            fontSize: { xs: "20px", sm: "32px" },
            fontFamily: "Montserrat",
          }}
        >
          We provide driving lessons for various types of cars
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontSize: { xs: "14px", sm: "18px" },
            fontFamily: "Montserrat",
          }}
        >
          Professional staff who are ready to help you to become a much-needed
          reliable driver
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 8 }}
          justifyContent="center"
          alignItems="center"
          mt={{ xs: 2, sm: 4 }}
          sx={{
            flexWrap: "wrap",
            textAlign: "center",
            width: "100%",
            px: { xs: 1, sm: 0 },
            fontFamily: "Montserrat",
          }}
        >
          {[
            {
              number: "50+",
              text: "A class ready to make you a reliable driver",
            },
            {
              number: "20+",
              text: "Professional workforce with great experience",
            },
            {
              number: "10+",
              text: "Cooperate with driver service partners",
            },
          ].map((item, idx) => (
            <Box key={idx} sx={{ maxWidth: 250 }}>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{
                  color: "#fff",
                  mb: 1,
                  fontSize: { xs: "20px", sm: "28px" },
                }}
              >
                {item.number}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontSize: { xs: "13px", sm: "16px" } }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
