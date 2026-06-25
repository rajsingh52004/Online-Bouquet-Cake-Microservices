import axios from "axios";
const PRODUCT_API = "http://localhost:9090/api/products";

export const getAllProducts = async () => {
  const response = await axios.get(PRODUCT_API);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(PRODUCT_API, product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axios.put(`${PRODUCT_API}/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${PRODUCT_API}/${id}`);
  return response.data;
};