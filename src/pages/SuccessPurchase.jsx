import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function SuccessPurchase() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        margin={"auto"}
        width={"380px"}
        height={"437px"}
        marginTop={"100px"}
      >
        <Box
          component={"img"}
          src="./success.svg"
          width={"250px"}
          height={"250px"}
          marginRight={"30px"}
        ></Box>

        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "500",
            color: "primary.main",
            marginTop: "10px",
          }}
        >
          Purchase Successfully
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "400", marginTop: "10px" }}
        >
          That’s Great! We’re ready for driving day
        </Typography>
        <Box
          justifyContent={"space-between"}
          display={"flex"}
          gap={4}
          marginTop={"20px"}
        >
          <Button
            variant="outlined"
            sx={{ width: "182px", height: "50px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <Box
              component={"img"}
              src="./home.png"
              width={"13px"}
              height={"11px"}
              margin={"10px"}
            ></Box>
            Back To Home
          </Button>
          <Button
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              width: "182px",
              height: "50px",
            }}
            onClick={() => {
              navigate("/invoice");
            }}
          >
            <Box
              component={"img"}
              src="./kanan.png"
              width={"13px"}
              height={"11px"}
              margin={"10px"}
            ></Box>
            Open Invoice
          </Button>
        </Box>
      </Box>
    </>
  );
}
