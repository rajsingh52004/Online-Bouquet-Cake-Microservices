import axios from "axios";

const AUTH_API = "http://localhost:9090/api/auth";

export const registerUser = async (userData) => {
  const response = await axios.post(`${AUTH_API}/register`, userData);
  return response.data;
};

export const loginUser = async (loginData) => {
  const response = await axios.post(`${AUTH_API}/login`, loginData);
  return response.data;
};