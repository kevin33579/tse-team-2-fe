import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import tele from "../assets/tele.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";
import send from "../assets/send.svg";
import message from "../assets/message.svg";

export default function Footer() {
  return (
    <Box
      sx={{
        p: 5,
        color: "#333",
        fontFamily: "Poppins, sans-serif",
        marginLeft: "100px",
      }}
    >
      <Grid container spacing={5}>
        {/* About Us */}
        <Grid item xs={12} md={4}>
          <Box sx={{ width: 350, height: 105 }}>
            <Typography variant="h6" sx={{ color: "#790B0A", mb: 1 }}>
              About us
            </Typography>
            <Typography variant="body2" textAlign="justify">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Typography>
          </Box>
        </Grid>

        {/* Product */}
        <Grid item xs={12} sm={6} md={4} ml={20}>
          <Typography variant="h6" sx={{ color: "#790B0A", mb: 1 }}>
            Product
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                {["Electric", "LCGC", "Offroad", "SUV"].map((item, index) => (
                  <Typography
                    component="li"
                    variant="body2"
                    key={index}
                    sx={{ listStyleType: "disc" }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={6} ml={10}>
              <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                {["Hatchback", "MPV", "Sedan", "Truck"].map((item, index) => (
                  <Typography
                    component="li"
                    variant="body2"
                    key={index}
                    sx={{ listStyleType: "disc" }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* Address & Contact */}
        <Grid item xs={12} sm={6} md={4} ml={30}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: "#790B0A", mb: 1 }}>
              Address
            </Typography>
            <Typography variant="body2" textAlign="justify">
              Sed ut perspiciatis unde omnis iste natus error sit
              <br />
              voluptatem accusantium doloremque.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#790B0A", mb: 1 }}>
              Contact Us
            </Typography>
            <Stack direction="row" spacing={2}>
              {[tele, ig, yt, send, message].map((icon, index) => (
                <Box
                  component="img"
                  src={icon}
                  alt={`icon-${index}`}
                  key={index}
                  sx={{ width: 48, height: 48, cursor: "pointer" }}
                />
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
