import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from "./pages/Checkout";
import DetailKelas from "./pages/DetailKelas";
import Landing from "./pages/Landing";
import ListMenuKelas from "./pages/ListMenuKelas";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPasswordCreatePassword from "./pages/ResetPasswordCreatePassword";
import ResetPasswordEmail from "./pages/ResetPasswordEmail";
import Invoice from "./pages/Invoice";
import InvoiceDetail from "./pages/InvoiceDetails";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SuccessPurchase from "./pages/SuccessPurchase";
import MyClass from "./pages/MyClass";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import LayoutNavbar from "./pages/LayoutNavbar";
import AdminProduct from "./pages/AdminProduct";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import AdminUsers from "./pages/AdminUsers";
import ProtectedRoute from "./pages/ProtectedRoutes";
import AdminProductType from "./pages/AdminProductType";
import AddProductType from "./pages/AddProductType";
import EditProductType from "./pages/EditProductType";
import AdminInvoice from "./pages/AdminInvoice";
import AddInvoice from "./pages/AddInvoice";
import EditInvoice from "./pages/EditInvoice";
import AdminPaymentMethods from "./pages/AdminPaymentMethods";
import AddPaymentMethod from "./pages/AddPaymentMethod";
import EditPaymentMethod from "./pages/EditPaymentMethods";
import AdminSchedules from "./pages/AdminSchedule";
import AddSchedule from "./pages/AddSchedule";
import LayoutAdmin from "./pages/LayoutAdmin";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<LayoutNavbar />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<SuccessPurchase />} />
          </Route>
          <Route element={<LayoutAdmin />}>
            <Route
              path="/add-product-type"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AddProductType />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-product-type/:id"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <EditProductType />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-invoices"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AdminInvoice />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-invoice"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AddInvoice />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-invoice/:id"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <EditInvoice />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-payment-methods"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AdminPaymentMethods />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin-schedule"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AdminSchedules />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-payment-method"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AddPaymentMethod />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-payment-method/:id"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <EditPaymentMethod />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-product"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-product/:id"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <EditProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-users"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AdminUsers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-products"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AdminProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-type"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AdminProductType />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-schedule"
              element={
                <ProtectedRoute allowedRole={"Admin"}>
                  <AddSchedule />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Landing />} />
            <Route path="/list-menu-kelas/:type" element={<ListMenuKelas />} />
            <Route path="/detail/:id" element={<DetailKelas />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/invoice/:id" element={<InvoiceDetail />} />
            <Route path="/forgot-password" element={<ResetPasswordEmail />} />
            <Route
              path="/create-new-password"
              element={<ResetPasswordCreatePassword />}
            />
            <Route path="/my-class" element={<MyClass />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
