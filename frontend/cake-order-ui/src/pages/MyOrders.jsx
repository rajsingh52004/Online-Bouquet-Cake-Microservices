import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cancelOrder, getAllOrders } from "../services/orderService";
import "../styles/MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = async () => {
    try {
      const data = await getAllOrders();
      setOrders(data);
    } catch (error) {
      console.error("Orders loading failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    try {
      await cancelOrder(id);
      loadOrders();
      alert("Order cancelled successfully");
    } catch (error) {
      console.error("Cancel failed:", error);
      alert("Unable to cancel order");
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  if (loading) {
    return <h2 className="orders-loading">Loading orders...</h2>;
  }

  return (
    <section className="my-orders-page">
      <motion.div
        className="orders-header"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span>Order History</span>
        <h1>My Orders</h1>
        <p>Track your cake and bouquet orders here.</p>
      </motion.div>

      {orders.length === 0 ? (
        <div className="orders-empty">
          <h2>No orders found</h2>
          <p>Place your first order from the products page.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order, index) => (
            <motion.div
              className="order-card"
              key={order.id}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <span className="order-label">Order ID</span>
                <h3>#{order.id}</h3>
              </div>

              <div>
                <span className="order-label">User ID</span>
                <p>{order.userId}</p>
              </div>

              <div>
                <span className="order-label">Amount</span>
                <p>₹{order.totalAmount}</p>
              </div>

              <div>
                <span className="order-label">Status</span>
                <strong className={`status-badge ${order.status?.toLowerCase()}`}>
                  {order.status}
                </strong>
              </div>

              <div>
                <span className="order-label">Order Date</span>
                <p>
                  {order.orderDate
                    ? new Date(order.orderDate).toLocaleString()
                    : "N/A"}
                </p>
              </div>

              {order.status !== "CANCELLED" && (
                <button
                  className="cancel-order-btn"
                  onClick={() => handleCancel(order.id)}
                >
                  Cancel
                </button>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyOrders;