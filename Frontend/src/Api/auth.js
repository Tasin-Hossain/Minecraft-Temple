// import axios from "axios";

// // Ensure credentials are sent with requests
// axios.defaults.withCredentials = true;

// // Retrieve the access token from local storage
// const accessToken = localStorage.getItem("accessToken");

// Create header for JSON content type and add Authorization header
// const headerAppJson = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${accessToken}`,  // Add access token here
//   },
// };

// // Base API URL
// const API = "http://localhost:5000/api/auth";

import api from "./Api";

// Login API
export const LOGIN_API = (data) =>
  api.post(`/login`, data);

// Register API
export const REGISTER_API = (data) =>
  api.post(`/register`, data);

// Verify email API
export const VERIFY_EMAIL_API = (token, id) =>
  api.get(`/verify-email?token=${token}&id=${id}`);

export const RESEND_VERIFY_EMAIL_API =(email) => api.post('/resend-verification', {email}) 

// Enable 2FA API
export const ENABLE_2FA_API = () =>
  api.post(`/2fa/enable`, {});

// Confirm 2FA API
export const CONFIRM_2FA_API = (code) =>
  api.post(`/2fa/enable/confirm`, { code });

// Verify 2FA API (with tempToken and code)
export const VERIFY_2FA_API = (tempToken, code) =>
  api.post(`/2fa/verify?tempToken=${tempToken}`, { code });

// Disable 2FA API (with password and code)
export const DISABLE_2FA_API = (password, code) =>
  api.post(`/2fa/disable`, { password, code });

export const REFRESH_API = () =>
  api.post(`/refresh`, {}, { withCredentials: true });


export const REFRESH_TOKEN_CHECKER = () =>
  api.get(`/check-token`, {}, { withCredentials: true });

// Logout API
export const LOGOUT_API = () =>
  api.post(`/logout`, {}, { withCredentials: true });
