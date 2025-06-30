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
      console.error(`Error fetch product ${id}`, error);
      throw error;
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
};

export const scheduleApi = {
  // Get all products
  getAllSchedule: async () => {
    try {
      const response = await apiClient.get("/Schedule");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
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
      console.error("Error fetching products:", error);
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
      console.error("Error fetching products:", error);
      throw error;
    }
  },
};
