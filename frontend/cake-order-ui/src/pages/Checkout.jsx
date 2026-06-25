import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { makePayment } from "../services/paymentService";
import { placeOrder } from "../services/orderService";
import { useCart } from "../context/CartContext";

import "../styles/Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);

  const totalAmount = cartTotal;

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);

      await makePayment({
        orderId: Date.now(),
        amount: totalAmount,
      });

      await placeOrder({
        userId: 1,
        totalAmount,
      });

      clearCart();

      alert("Payment Successful & Order Placed!");
      navigate("/orders");
    } catch (error) {
      console.error(error);
      alert("Payment Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="checkout-page">
      <motion.div
        className="checkout-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Checkout</h1>

        <div className="checkout-total">
          Total Items
          <span>{cartItems.length}</span>
        </div>

        <div className="checkout-total">
          Total Amount
          <span>₹{totalAmount}</span>
        </div>

        <h3>Select Payment Method</h3>

        <div className="payment-options">
          <label>
            <input
              type="radio"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash On Delivery
          </label>

          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>

          <label>
            <input
              type="radio"
              value="CARD"
              checked={paymentMethod === "CARD"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit / Debit Card
          </label>
        </div>

        <button
          className="pay-btn"
          onClick={handlePlaceOrder}
          disabled={loading || cartItems.length === 0}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </motion.div>
    </section>
  );
}

export default Checkout;