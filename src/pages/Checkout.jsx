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

export default function Checkout() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allChecked = checkedItems.length === carData.length;

  const handleToggle = (id) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleToggleAll = () => {
    setCheckedItems(allChecked ? [] : carData.map((car) => car.id));
  };

  const handleDelete = (id) => {
    alert(`Delete item with id ${id}`);
  };

  const totalPrice = checkedItems.reduce((sum, id) => {
    const car = carData.find((c) => c.id === id);
    return car ? sum + car.price : sum;
  }, 0);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <List sx={{ width: "100%", p: 0 }}>
          <ListItem divider>
            <Checkbox
              checked={allChecked}
              onChange={handleToggleAll}
              edge="start"
            />
            <ListItemText
              primary="Pilih Semua"
              primaryTypographyProps={{ fontFamily: "Montserrat" }}
            />
          </ListItem>

          {carData.map((car) => (
            <ListItem
              key={car.id}
              divider
              sx={{
                alignItems: "flex-start",
                gap: 2,
                fontFamily: "Montserrat",
              }}
            >
              <Checkbox
                edge="start"
                checked={checkedItems.includes(car.id)}
                onChange={() => handleToggle(car.id)}
              />
              <Avatar
                variant="square"
                src={car.image}
                alt={car.name}
                sx={{
                  width: "200px",
                  height: "133.33px",
                  border: "1px solid #ccc",
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 400, fontSize: "16px" }}
                >
                  Type Car: {car.type}
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>
                  {car.name}
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  Schedule: {car.schedule}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "primary.main",
                  }}
                >
                  IDR {car.price.toLocaleString()}
                </Typography>
              </Box>
              <IconButton onClick={() => handleDelete(car.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: "18px",
          }}
        >
          Total Price
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "24px",
              color: "primary.main",
            }}
          >
            IDR {totalPrice.toLocaleString()}
          </Typography>

          <Button
            variant="contained"
            sx={{
              width: 233,
              height: 40,
              padding: "10px 20px",
              borderRadius: "8px",
              textTransform: "none",
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "16px",
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Pay Now
          </Button>
        </Box>
      </Box>

      {/* MODAL */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            p: 3,
            mx: "auto",
            mt: "10%",
            fontFamily: "Poppins",
          }}
        >
          <Typography
            align="center"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "20px",
              mb: 3,
            }}
          >
            Select Payment Method
          </Typography>

          {paymentMethods.map((method) => (
            <Box
              key={method.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <Avatar
                src={method.image}
                alt={method.name}
                sx={{ width: 40, height: 40, borderRadius: "8px" }}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "18px",
                }}
              >
                {method.name}
              </Typography>
            </Box>
          ))}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 4,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setIsModalOpen(false)}
              sx={{
                width: 155,
                height: 48,
                p: "12px 16px",
                borderRadius: "8px",
                fontFamily: "Poppins",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                width: 155,
                height: 48,
                p: "12px 16px",
                borderRadius: "8px",
                fontFamily: "Poppins",
                backgroundColor: "primary.main",
              }}
            >
              Pay Now
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
