import axios from "axios";
import store from "../Redux/store";        // store import
import { logout } from "../Redux/userSlice"; // logout action

// Helper logout function
const handleLogout = () => {
  localStorage.removeItem("accessToken");
  store.dispatch(logout());
  window.location.href = "/login";
};

// Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});

// Request interceptor → attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Refresh API
const REFRESH_API = () => api.post("/refresh");

// Response interceptor
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // 401 → try refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await REFRESH_API();
        console.log(res)
        const newToken = res.data.accessToken;

        localStorage.setItem("accessToken", newToken);

        api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        console.log("accessToken generate", newToken)

        return api(originalRequest);
      } catch (err) {
        handleLogout();
         console.log(err)
      }
    }

    return Promise.reject(error);
  }
);

export default api;
