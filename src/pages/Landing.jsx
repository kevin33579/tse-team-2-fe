import React from "react";
import Top_section from "../components/Top_section";
import Middle_section from "../components/Middle_section";
import Benefit_section from "../components/Benefit_section";
import Bottom_section from "../components/Bottom_section";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar></Navbar>
      <Top_section></Top_section>
      <Middle_section></Middle_section>
      <Benefit_section></Benefit_section>
      <Bottom_section></Bottom_section>
      <Footer></Footer>
    </>
  );
}
