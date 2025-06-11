import React from "react";
import { Box, Typography, Stack } from "@mui/material";

export default function Top_section() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "496px",
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
          gap: 3,
          px: 2,
          pointerEvents: "none",
        }}
      >
        <Typography variant="h4" fontWeight={600} sx={{ color: "#fff", mb: 2 }}>
          We provide driving lessons for various types of cars
        </Typography>

        <Typography variant="h6" sx={{ color: "#fff" }}>
          Professional staff who are ready to help you to become a much-needed
          reliable driver
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 10 }}
          justifyContent="center"
          alignItems="center"
          mt={4}
          sx={{ flexWrap: "wrap", textAlign: "center" }}
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
            { number: "10+", text: "Cooperate with driver service partners" },
          ].map((item, idx) => (
            <Box key={idx} sx={{ maxWidth: 250 }}>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ color: "#fff", mb: 1 }}
              >
                {item.number}
              </Typography>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
