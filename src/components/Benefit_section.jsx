import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import benefitImage from "../assets/benefit.png";

const BenefitSectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "stretch",
  padding: "60px 80px",
  gap: "40px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    padding: "24px",
    gap: "24px",
  },
}));

const BenefitLeft = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "200px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0",
  },
}));

const BenefitTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "100%",
  color: "#790B0A",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    textAlign: "center",
  },
}));

const BenefitSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#333",
  textAlign: "justify",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const BenefitRight = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

const BenefitImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  objectFit: "cover",
  borderRadius: "16px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    borderRadius: "12px",
  },
}));

export default function BenefitSection() {
  return (
    <BenefitSectionWrapper>
      <BenefitLeft>
        <BenefitTitle variant="h2">Gets your best benefit</BenefitTitle>
        <BenefitSubtitle>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam.
          <br />
          <br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </BenefitSubtitle>
      </BenefitLeft>
      <BenefitRight>
        <BenefitImage src={benefitImage} alt="Benefit" />
      </BenefitRight>
    </BenefitSectionWrapper>
  );
}
