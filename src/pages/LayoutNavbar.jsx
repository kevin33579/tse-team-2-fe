import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LayoutNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
