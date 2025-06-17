import React from "react";
import { Box, Grid, Typography, Stack, Divider } from "@mui/material";
import tele from "../assets/tele.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";
import send from "../assets/send.svg";
import message from "../assets/message.svg";

export default function Footer() {
  return (
    <>
      <Divider sx={{ margin: "20px", width: "100vw" }}></Divider>
      <Box
        sx={{
          px: { xs: 2, sm: 5 },
          py: { xs: 4, sm: 6 },
          color: "#333",
          fontFamily: "Poppins",
        }}
      >
        <Grid
          container
          spacing={{ md: 32, xs: 4 }}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          {/* About Us */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#790B0A",
                  mb: 1,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                About us
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    textAlign: "justify",
                    mb: 1.5,
                    maxWidth: "400px",
                  }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Product */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: "left", md: "left" } }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#790B0A",
                  mb: 1,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Product
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6}>
                  <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                    {["Electric", "LCGC", "Offroad", "SUV"].map(
                      (item, index) => (
                        <Typography
                          component="li"
                          variant="body2"
                          key={index}
                          sx={{
                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                            listStyleType: "disc",
                          }}
                        >
                          {item}
                        </Typography>
                      )
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                    {["Hatchback", "MPV", "Sedan", "Truck"].map(
                      (item, index) => (
                        <Typography
                          component="li"
                          variant="body2"
                          key={index}
                          sx={{
                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                            listStyleType: "disc",
                          }}
                        >
                          {item}
                        </Typography>
                      )
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Address & Contact */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#790B0A",
                  mb: 1,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Address
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  textAlign: "justify",
                  width: "350px",
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#790B0A",
                  mb: 1,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Contact Us
              </Typography>
              <Stack direction="row" spacing={1}>
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
    </>
  );
}
