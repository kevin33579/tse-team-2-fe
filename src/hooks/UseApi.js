import { useState, useEffect } from 'react';
import axios from 'axios';

// Base URL dari environment variable
const BASE_URL = 'http://otomobil.local';

// Create axios instance dengan base configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor untuk token authentication
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor untuk error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Hook untuk GET request
export const useGet = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { immediate = true, dependencies = [] } = options;

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.get(url);
      setData(response.data);
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, dependencies);

  return { data, loading, error, refetch: fetchData };
};

// Hook untuk POST request
export const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, data = {}) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.post(url, data);
      return response.data;
    } catch (err) {
      setError(err.response?.data || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error };
};

// Hook untuk PUT request
export const usePut = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const put = async (url, data = {}) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.put(url, data);
      return response.data;
    } catch (err) {
      setError(err.response?.data || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { put, loading, error };
};

// Hook untuk PATCH request
export const usePatch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const patch = async (url, data = {}) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.patch(url, data);
      return response.data;
    } catch (err) {
      setError(err.response?.data || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { patch, loading, error };
};

// Hook untuk DELETE request
export const useDelete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteItem = async (url) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.delete(url);
      return response.data;
    } catch (err) {
      setError(err.response?.data || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { delete: deleteItem, loading, error };
};

// Hook untuk multiple API calls
export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (method, url, data = null) => {
    try {
      setLoading(true);
      setError(null);
      
      let response;
      switch (method.toLowerCase()) {
        case 'get':
          response = await apiClient.get(url);
          break;
        case 'post':
          response = await apiClient.post(url, data);
          break;
        case 'put':
          response = await apiClient.put(url, data);
          break;
        case 'patch':
          response = await apiClient.patch(url, data);
          break;
        case 'delete':
          response = await apiClient.delete(url);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
      
      return response.data;
    } catch (err) {
      setError(err.response?.data || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};

// Export axios instance untuk penggunaan manual jika diperlukan
export { apiClient };
