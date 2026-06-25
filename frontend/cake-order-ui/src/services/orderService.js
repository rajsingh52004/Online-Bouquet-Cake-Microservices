import axios from "axios";

const ORDER_API = "http://localhost:9090/api/orders";

export const placeOrder = async (orderData) => {
  const response = await axios.post(ORDER_API, orderData);
  return response.data;
};

export const getAllOrders = async () => {
  const response = await axios.get(ORDER_API);
  return response.data;
};

export const cancelOrder = async (id) => {
  const response = await axios.put(`${ORDER_API}/${id}/cancel`);
  return response.data;
};