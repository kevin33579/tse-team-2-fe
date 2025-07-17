import axios from "axios";

// Base configuration for API calls
const API_BASE_URL = "http://otomobil.local/api"; // Adjust based on your backend URL

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // <— your JWT
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // attach it
  }
  return config;
});

export const productApi = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await apiClient.get("/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  getAllProductsLimit: async () => {
    try {
      const response = await apiClient.get("/products/limit");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  getProductById: async (id) => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetch product ${id}`, error);
      throw error;
    }
  },
  getProductByTypeId: async (id) => {
    try {
      const response = await apiClient.get(`/products/type/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetch product type ${id}`, error);
      throw error;
    }
  },
  createProduct: async (data) => {
    try {
      const res = await apiClient.post("/products", data);
      return res.data; // return just payload
    } catch (err) {
      console.error("Error creating product:", err);
      throw err;
    }
  },
  editProduct: async (id, data) => {
    try {
      const response = await apiClient.put(`/products/${id}`, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      const response = await apiClient.delete(`/products/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export const productTypeApi = {
  // Get all products
  getAllProductsType: async () => {
    try {
      const response = await apiClient.get("/ProductTypes");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  getProductTypeById: async (id) => {
    try {
      const response = await apiClient.get(`/ProductTypes/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  getAllProductsTypeAdmin: async () => {
    try {
      const response = await apiClient.get("/ProductTypes/Admin");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  createProductsType: async (data) => {
    try {
      const response = await apiClient.post("/ProductTypes", data);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  editProductsType: async (data, id) => {
    try {
      const response = await apiClient.put(`/ProductTypes/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  deleteProductsType: async (id) => {
    try {
      const response = await apiClient.delete(`/ProductTypes/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
};

export const scheduleApi = {
  // Get all products
  getAllSchedule: async () => {
    try {
      const response = await apiClient.get("/Schedule");
      return response.data;
    } catch (error) {
      console.error("Error fetching schedule:", error);
      throw error;
    }
  },
  getAllScheduleAdmin: async () => {
    try {
      const response = await apiClient.get("/Schedule/Admin");
      return response.data;
    } catch (error) {
      console.error("Error fetching schedule:", error);
      throw error;
    }
  },
  getUserSchedule: async () => {
    try {
      const response = await apiClient.get("/Schedule/user");
      return response.data;
    } catch (error) {
      console.error("Error fetching user schedule:", error);
      throw error;
    }
  },

  createSchedule: async (data) => {
    try {
      const response = await apiClient.post("/Schedule", data);
      return response.data;
    } catch (error) {
      console.error("Error fetching schedule:", error);
      throw error;
    }
  },
  deleteSchedule: async (id) => {
    try {
      const response = await apiClient.delete(`/Schedule/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching schedule:", error);
      throw error;
    }
  },
  deactivateSchedule: async (id) => {
    try {
      const response = await apiClient.put(`/Schedule/deactivate/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching schedule:", error);
      throw error;
    }
  },
  activateSchedule: async (id) => {
    try {
      const response = await apiClient.put(`/Schedule/activate/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching schedule:", error);
      throw error;
    }
  },
};

export const cartApi = {
  createCart: async (CartData, token) => {
    try {
      const response = await apiClient.post("Cart", CartData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error create cart", error);
      throw error;
    }
  },
  getUserCart: async (id, token) => {
    try {
      const response = await apiClient.get(`Cart/user/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  },
  deleteCartById: async (id, token) => {
    try {
      const response = await apiClient.delete(`Cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error delete", error);
      throw error;
    }
  },
};

export const paymentMethodApi = {
  getPaymentMethod: async () => {
    try {
      const response = await apiClient.get("/PaymentMethod");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching payment:", error);
      throw error;
    }
  },
  getPaymentMethodAdmin: async () => {
    try {
      const response = await apiClient.get("/PaymentMethod/Admin");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching payment:", error);
      throw error;
    }
  },
  createPaymentMethod: async (data) => {
    try {
      const response = await apiClient.post("/PaymentMethod", data);
      return response.data;
    } catch (error) {
      console.error("Error creating payment method:", error);
      throw error;
    }
  },
  updatePaymentMethod: async (paymentMethod) => {
    if (!paymentMethod.id || paymentMethod.id === 0) {
      throw new Error("Payment method id is required and must not be zero");
    }

    const response = await apiClient.put("/paymentmethod", paymentMethod);
    return response.data;
  },
  deletePaymentMethod: async (id) => {
    try {
      const response = await apiClient.delete(`/PaymentMethod/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting payment method:", error);
      throw error;
    }
  },
  getPaymentMethodById: async (id) => {
    try {
      const res = await apiClient.get(`/PaymentMethod/${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};

export const invoiceApi = {
  createInvoice: async (data) => {
    try {
      const response = await apiClient.post("Invoice", data);
      return response.data;
    } catch (error) {
      console.error("Error create invoice:", error);
      throw error;
    }
  },
  getInvoiceByUser: async (id) => {
    try {
      const response = await apiClient.get(`Invoice/user/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching invoice:", error);
      throw error;
    }
  },
  getAllInvoicesAdmin: async () => {
    try {
      const response = await apiClient.get("Invoice/all");
      return response.data;
    } catch (error) {
      console.error("Error fetching invoices:", error);
      throw error;
    }
  },

  getInvoiceById: async (id) => {
    try {
      const response = await apiClient.get(`Invoice/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching invoice ${id}`, error);
      throw error;
    }
  },

  updateInvoice: async (data) => {
    try {
      const response = await apiClient.put("Invoice", data);
      return response.data;
    } catch (error) {
      console.error("Error updating invoice:", error);
      throw error;
    }
  },

  deleteInvoice: async (id) => {
    try {
      const response = await apiClient.delete(`Invoice/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting invoice:", error);
      throw error;
    }
  },
};

export const user = {
  registerApi: async (data) => {
    try {
      const response = await apiClient.post("Auth/register", data);
      return response.data;
    } catch (error) {
      console.error("Error fetching payment:", error);
      throw error;
    }
  },
  loginApi: async (data) => {
    try {
      const response = await apiClient.post("/Auth/login", data);
      return response.data;
    } catch (error) {
      // Penting: lempar error agar bisa ditangkap di Login.jsx
      console.error("Login error:", error);
      throw error;
    }
  },
  getAllUsersApi: async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://otomobil.local/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
  deactivateUserApi: async (id) => {
    try {
      const response = await apiClient.put(`Users/deactivate/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching payment:", error);
      throw error;
    }
  },
  activateUserApi: async (id) => {
    try {
      const response = await apiClient.put(`Users/activate/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching payment:", error);
      throw error;
    }
  },
};

export const invoiceDetailApi = {
  createDetail: async (data) => {
    try {
      const response = await apiClient.post("InvoiceDetail", data);
      return response.data;
    } catch (error) {
      console.error("Error fetching payment:", error);
      throw error;
    }
  },
  getInvoiceById: async (id) => {
    try {
      const response = await apiClient.get(`InvoiceDetail/invoice/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching payment:", error);
      throw error;
    }
  },
  getIncomingClassByUser: async (id) => {
    try {
      const response = await apiClient.get(`InvoiceDetail/user/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching payment:", error);
      throw error;
    }
  },
};
