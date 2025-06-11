import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import benefitImage from "../assets/benefit.png"; // Ensure Webpack/CRA can resolve this

const BenefitSectionWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "stretch",
  padding: "60px 80px",
  gap: "40px",
});

const BenefitLeft = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "200px",
});

const BenefitTitle = styled(Typography)({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "100%",
  color: "#790B0A",
  marginBottom: "20px",
});

const BenefitSubtitle = styled(Typography)({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#333",
  textAlign: "justify",
});

const BenefitRight = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

const BenefitImage = styled("img")({
  width: "100%",
  maxWidth: "600px",
  objectFit: "cover",
  borderRadius: "16px",
});

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
