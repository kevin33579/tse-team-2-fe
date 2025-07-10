import axios from "axios";

// Base configuration for API calls
const API_BASE_URL = "https://localhost:7071/api"; // Adjust based on your backend URL

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
  createSchedule: async (data) => {
    try {
      const response = await apiClient.post("/Schedule", data);
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
      const response = await apiClient.get("PaymentMethod");
      return response.data;
    } catch (error) {
      console.error("Error fetching payment:", error);
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
  getAllUsersApi: async (data) => {
    try {
      const response = await apiClient.get("Users", data);
      return response.data;
    } catch (error) {
      console.error("Error fetching payment:", error);
      throw error;
    }
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
