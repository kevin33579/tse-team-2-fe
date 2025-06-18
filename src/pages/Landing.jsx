import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopSection from "../components/TopSection";
import MiddleSection from "../components/MiddleSection";
import BenefitSection from "../components/BenefitSection";
import BottomSection from "../components/BottomSection";

export default function Landing() {
  return (
    <>
      <Navbar></Navbar>
      <TopSection />
      <MiddleSection />
      <BenefitSection />
      <BottomSection />
      <Footer></Footer>
    </>
  );
}
