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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

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
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
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
              }}
              margin={"20px"}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked[index]}
                    onChange={handleCheckboxChange(index)}
                  />
                }
              />
              <Box display={"flex"} flexDirection={"row"}>
                <img src={el.image} width={"200px"} height={"133px"}></img>
                <Box display={"flex"} flexDirection={"column"} margin={"20px"}>
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
              </Box>
              <Icon
                component="img"
                sx={{
                  height: "30px",
                  width: "23px",
                  marginLeft: "500px",
                  cursor: "pointer",
                }}
                src="./delete.png"
              />
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
        <Grid item xs={12}>
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
            sx={{ fontSize: "18px", fontWeight: "400", margin: "20px" }}
          >
            Total Price
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
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
              width: "233px",
              height: "40px",
              margin: "20px",
            }}
          >
            Pay now
          </Button>
        </Grid>
      </Grid>

      {/* {"Modal"} */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: "500" }}
          >
            Select Payment Method
          </Typography>
          {paymentMethods.map((el) => {
            return (
              <>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={2}
                  sx={{
                    width: "326px",
                    height: "40px",
                    margin: "20px",
                    cursor: "pointer",
                    ":hover": { transform: "scale(1.05)" },
                  }}
                >
                  <Box
                    component="img"
                    src={el.image}
                    alt={el.name}
                    sx={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    {el.name}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>
      </Modal>
    </>
  );
}
