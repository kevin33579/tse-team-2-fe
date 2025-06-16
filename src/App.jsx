import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from "./pages/Checkout";
import DetailKelas from "./pages/DetailKelas";
import Landing from "./pages/Landing";
import ListMenuKelas from "./pages/ListMenuKelas";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPasswordCreatePassword from "./pages/ResetPasswordCreatePassword";
import ResetPasswordEmail from "./pages/ResetPasswordEmail";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import SuccessPurchase from "./pages/SuccessPurchase";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list-menu-kelas/:type" element={<ListMenuKelas />} />
          <Route path="/detail/:id" element={<DetailKelas />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ResetPasswordEmail />} />
          <Route
            path="/create-new-password"
            element={<ResetPasswordCreatePassword />}
          />
          <Route path="/success" element={<SuccessPurchase />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
