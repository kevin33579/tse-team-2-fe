import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  Typography,
  Button,
  Grid,
  FormControlLabel,
  Icon,
} from "@mui/material";
import Navbar from "../components/Navbar";
import "@fontsource/poppins";
import ModalComponent from "../components/ModalComponent";
import { cartApi } from "../apiService";
import { formatLongDate, toRupiah } from "../helper";
import Swal from "sweetalert2";

export default function Checkout() {
  const [checked, setChecked] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cart, setCart] = useState([]);
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const selectedDetails = cart
    .filter((_, idx) => checked[idx]) // only checked rows
    .map((item) => ({
      productId: item.productId,
      scheduleId: item.scheduleId,
      cartId: item.id,
    }));

  const totalCourse = checked.filter(Boolean).length;

  const handleSelectAll = (event) => {
    setChecked(checked.map(() => event.target.checked));
  };

  async function fetchData() {
    const response = await cartApi.getUserCart(id, token);
    setCart(response);
    setChecked(Array(response.length).fill(false));
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckboxChange = (index) => (event) => {
    const updated = [...checked];
    updated[index] = event.target.checked;
    setChecked(updated);
  };
  const handleDelete = async (cartId) => {
    try {
      await cartApi.deleteCartById(cartId, token);

      // remove the deleted item from state so React re‑renders
      setCart((prev) => prev.filter((item) => item.id !== cartId));
      setChecked((prev) => prev.filter((_, i) => cart[i].id !== cartId));

      Swal.fire({
        title: "Item removed",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to delete",
      });
    }
  };

  console.log(cart.length);
  const children = (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Divider></Divider>
      {cart.length == 0 ? (
        <Typography margin={"20px"}>There are no cart yet</Typography>
      ) : (
        ""
      )}
      {cart.map((el, index) => {
        return (
          <>
            <Divider></Divider>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexWrap: "nowrap",
                margin: "10px",
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
                  alignItems: "center",
                  flexWrap: "wrap",
                  width: "100%", // let items use full row
                }}
              >
                <Box
                  component="img"
                  src={el.productImageUrl}
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
                    mt: { xs: 0, sm: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#4F4F4F",
                    }}
                  >
                    {el.productTypeName}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "14px", md: "24px" } }}>
                    {el.productName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#4F4F4F",
                    }}
                  >
                    {formatLongDate(el.scheduleTime)}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "20px", xs: "14px" },
                      color: "primary.main",
                    }}
                  >
                    {toRupiah(el.productPrice)}
                  </Typography>
                </Box>
                <Icon
                  component="img"
                  sx={{
                    height: { xs: "20px", md: "30px" },
                    width: { xs: "16px", md: "23px" },
                    cursor: "pointer",
                  }}
                  src={`${import.meta.env.BASE_URL}delete.png`}
                  onClick={() => handleDelete(el.id)}
                />
              </Box>
            </Box>
          </>
        );
      })}
    </Box>
  );
  const totalPrice = cart.reduce(
    (sum, item, i) => (checked[i] ? sum + item.productPrice : sum),
    0
  );
  return (
    <>
      <Box px={{ xs: 2, sm: 4, md: 6 }}>
        <Grid
          container
          spacing={2}
          direction="column"
          width="100%"
          maxWidth="1137px"
          mx="auto"
        >
          <Grid item xs={12}>
            <FormControlLabel
              label="Pilih Semua"
              control={
                <Checkbox
                  checked={checked.every(Boolean)}
                  indeterminate={
                    checked.some(Boolean) && !checked.every(Boolean)
                  }
                  onChange={handleSelectAll}
                />
              }
            />
            {children}
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          maxWidth="1137px"
          mx="auto"
        >
          <Grid item xs={12} sm={8} display="flex" alignItems="center">
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                mr: 2,
              }}
            >
              Total Price
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "24px" },
                fontWeight: "600",
                color: "primary.main",
              }}
            >
              {toRupiah(totalPrice)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            justifyContent={{ xs: "flex-start", sm: "flex-end" }}
          >
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                px: 2,
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                width: { xs: "100%", sm: "auto" },
                height: "40px",
              }}
            >
              Pay now
            </Button>
          </Grid>
        </Grid>
      </Box>

      <ModalComponent
        open={open}
        handleClose={handleClose}
        totalPrice={totalPrice}
        totalCourse={totalCourse}
        selectedDetails={selectedDetails}
      />
    </>
  );
}
