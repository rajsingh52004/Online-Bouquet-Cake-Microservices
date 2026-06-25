import axios from "axios";

const DELIVERY_API = "http://localhost:9090/deliveries";

export const createDelivery = async (deliveryData) => {
  const response = await axios.post(DELIVERY_API, deliveryData);
  return response.data;
};

export const getAllDeliveries = async () => {
  const response = await axios.get(DELIVERY_API);
  return response.data;
};

export const updateDeliveryStatus = async (id, status) => {
  const response = await axios.put(`${DELIVERY_API}/${id}/status?status=${status}`);
  return response.data;
};