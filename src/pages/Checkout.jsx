import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
  Button,
  Modal,
  Grid,
  FormControlLabel,
  ImageList,
  Icon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "../components/Navbar";
import "@fontsource/poppins";
import ModalComponent from "../components/ModalComponent";

const carData = [
  {
    id: 1,
    image: "./palisade.png",
    type: "SUV",
    name: "Hyundai Palisade",
    schedule: "Wednesday, 27 July 2022",
    price: 800000,
  },
  {
    id: 2,
    image: "./Fortuner.png",
    type: "SUV",
    name: "Toyota Fortuner",
    schedule: "Wednesday, 27 July 2022",
    price: 850000,
  },
];

const paymentMethods = [
  { id: 1, name: "Gopay", image: "./gopay.png" },
  { id: 2, name: "OVO", image: "./ovo.png" },
  { id: 3, name: "DANA", image: "./dana.png" },
];

export default function Checkout() {
  const [checked, setChecked] = useState(carData.map(() => false));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelectAll = (event) => {
    setChecked(checked.map(() => event.target.checked));
  };

  const handleCheckboxChange = (index) => (event) => {
    const updated = [...checked];
    updated[index] = event.target.checked;
    setChecked(updated);
  };

  const children = (
    <Box
      sx={{ display: "flex", flexDirection: "column", ml: { xs: 0, md: 3 } }}
    >
      <Divider></Divider>
      {carData.map((el, index) => {
        return (
          <>
            <Divider></Divider>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
                px: 2,
                py: 1,
                margin: { xs: "0", md: "20px" },
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked[index]}
                    onChange={handleCheckboxChange(index)}
                  />
                }
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  component="img"
                  src={el.image}
                  sx={{
                    width: { xs: "100px", sm: "200px" },
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 2,
                    flex: 1,
                    mt: { xs: 1, sm: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#4F4F4F",
                    }}
                  >
                    {el.type}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "16px", md: "24px" } }}>
                    {el.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#4F4F4F",
                    }}
                  >
                    {el.schedule}
                  </Typography>
                  <Typography sx={{ fontSize: "20px", color: "primary.main" }}>
                    IDR. {el.price}
                  </Typography>
                </Box>
                <Icon
                  component="img"
                  sx={{
                    height: { xs: "20px", md: "30px" },
                    width: { xs: "13px", md: "23px" },
                    marginLeft: { xs: "100px", md: "300px" },
                    cursor: "pointer",
                  }}
                  src="./delete.png"
                />
              </Box>
            </Box>
          </>
        );
      })}
    </Box>
  );
  const totalPrice = carData.reduce(
    (sum, item, i) => (checked[i] ? sum + item.price : sum),
    0
  );
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={2}
        direction={"column"}
        display={"flex"}
        width={{ xs: "100%", md: "1137px" }}
        margin={"auto"}
      >
        <Grid item xs={12} sx={{ marginLeft: { xs: "20px" } }}>
          <FormControlLabel
            label="Pilih Semua"
            control={
              <Checkbox
                checked={checked.every(Boolean)}
                indeterminate={checked.some(Boolean) && !checked.every(Boolean)}
                onChange={handleSelectAll}
              />
            }
          />
          {children}
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: "350px" }}></Divider>
      <Grid
        container
        sx={{
          display: "flex",
          marginRight: "200px",
        }}
      >
        <Grid
          item
          size={8}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
          xs={12}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", margin: "20px" }}
          >
            Total Price
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "24px" },
              fontWeight: "600",
              color: "primary.main",
              margin: "20px",
            }}
          >
            IDR {totalPrice}
          </Typography>
        </Grid>
        <Grid item size={4} xs={12}>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              px: 2,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              backgroundColor: "primary.main",
              width: { xs: "50px", md: "233px" },
              height: "40px",
              margin: "20px",
            }}
          >
            Pay now
          </Button>
        </Grid>
      </Grid>

      <ModalComponent
        paymentMethods={paymentMethods}
        open={open}
        handleClose={handleClose}
      ></ModalComponent>
    </>
  );
}
