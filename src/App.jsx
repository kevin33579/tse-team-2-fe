import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from "./pages/Checkout";
import DetailKelas from "./pages/DetailKelas";
import Landing from "./pages/Landing";
import ListMenuKelas from "./pages/ListMenuKelas";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list-menu-kelas" element={<ListMenuKelas />} />
        <Route path="/list-menu-kelas/:id" element={<DetailKelas />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
