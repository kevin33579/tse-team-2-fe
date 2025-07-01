import { Box, Button, Modal, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { invoiceApi, paymentMethodApi } from "../apiService";
import Swal from "sweetalert2";

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
export default function ModalComponent({
  handleClose,
  open,
  totalPrice,
  totalCourse,
}) {
  const [data, setData] = useState([]);
  const [selectedMethodId, setSelectedMethodId] = useState(null);

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

  const userId = localStorage.getItem("id");

  const postInvoice = async () => {
    try {
      await invoiceApi.createInvoice({
        totalPrice,
        totalCourse,
        paymentMethodId: selectedMethodId,
        userId,
      });
      await Swal.fire({
        icon: "success",
        title: "Payment successful",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/success");
    } catch (e) {
      console.error(e);
      Swal.fire({ icon: "error", title: "Payment failed" });
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
                  key={el.id}
                  onClick={() => setSelectedMethodId(el.id)}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  sx={{
                    width: 326,
                    height: 40,
                    m: 2,
                    p: 1,
                    cursor: "pointer",
                    border:
                      selectedMethodId === el.id
                        ? "2px solid #1976d2"
                        : "1px solid transparent",
                    borderRadius: 1,
                    transition: "transform .15s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <Box
                    component="img"
                    src={el.imageUrl}
                    alt={el.name}
                    sx={{ width: 40, height: 40, objectFit: "contain" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: 18,
                      fontWeight: 500,
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
                width: 155,
                height: 48,
              }}
              onClick={() => {
                if (totalCourse === 0) {
                  Swal.fire({
                    icon: "warning",
                    title: "Pick at least one course first",
                  });
                  return;
                }
                if (!selectedMethodId) {
                  Swal.fire({
                    icon: "warning",
                    title: "Select a payment method",
                  });
                  return;
                }
                postInvoice();
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
