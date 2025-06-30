import { Box, Button, Modal, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paymentMethodApi } from "../apiService";

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
export default function ModalComponent({ handleClose, open }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await paymentMethodApi.getPaymentMethod(); // <- await promise
      setData(res.data ?? []); // <- assume { data: [...] }
    } catch (e) {
      console.error(e);
      setData([]); // fallback
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
          {data.map((el) => {
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
                    src={el.imageUrl}
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
          <Box display={"flex"} flexDirection={"row"} gap={4}>
            <Button
              variant="outlined"
              sx={{ width: "155px", height: "48px" }}
              onClick={() => {
                handleClose();
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                width: "155px",
                height: "48px",
              }}
              onClick={() => {
                navigate("/success");
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
