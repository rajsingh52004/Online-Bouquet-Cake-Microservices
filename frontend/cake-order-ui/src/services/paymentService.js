import axios from "axios";

const PAYMENT_API = "http://localhost:9090/payments";

export const makePayment = async (paymentData) => {
  const response = await axios.post(PAYMENT_API, paymentData);
  return response.data;
};

export const getAllPayments = async () => {
  const response = await axios.get(PAYMENT_API);
  return response.data;
};