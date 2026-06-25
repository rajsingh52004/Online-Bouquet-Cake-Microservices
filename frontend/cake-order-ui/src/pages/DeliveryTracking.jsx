import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  createDelivery,
  getAllDeliveries,
  updateDeliveryStatus,
} from "../services/deliveryService";
import "../styles/Delivery.css";

function DeliveryTracking() {
  const [deliveries, setDeliveries] = useState([]);
  const [form, setForm] = useState({
    orderId: "",
    deliveryAddress: "",
  });

  const loadDeliveries = async () => {
    const data = await getAllDeliveries();
    setDeliveries(data);
  };

  useEffect(() => {
    loadDeliveries();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    await createDelivery({
      orderId: Number(form.orderId),
      deliveryAddress: form.deliveryAddress,
    });

    setForm({ orderId: "", deliveryAddress: "" });
    loadDeliveries();
  };

  const handleStatusChange = async (id, status) => {
    await updateDeliveryStatus(id, status);
    loadDeliveries();
  };

  return (
    <section className="delivery-page">
      <motion.div
        className="delivery-header"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span>Delivery Management</span>
        <h1>Track Deliveries</h1>
        <p>Create delivery records and update delivery status.</p>
      </motion.div>

      <form className="delivery-form" onSubmit={handleCreate}>
        <input
          type="number"
          name="orderId"
          placeholder="Order ID"
          value={form.orderId}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="deliveryAddress"
          placeholder="Delivery Address"
          value={form.deliveryAddress}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Delivery</button>
      </form>

      <div className="delivery-list">
        {deliveries.map((delivery, index) => (
          <motion.div
            className="delivery-card"
            key={delivery.id}
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.08 }}
          >
            <div>
              <span>Delivery ID</span>
              <h3>#{delivery.id}</h3>
            </div>

            <div>
              <span>Order ID</span>
              <p>#{delivery.orderId}</p>
            </div>

            <div>
              <span>Address</span>
              <p>{delivery.deliveryAddress}</p>
            </div>

            <div>
              <span>Status</span>
              <strong className={`delivery-status ${delivery.status?.toLowerCase()}`}>
                {delivery.status}
              </strong>
            </div>

            <select
              value={delivery.status}
              onChange={(e) => handleStatusChange(delivery.id, e.target.value)}
            >
              <option value="PENDING">Pending</option>
              <option value="ASSIGNED">Assigned</option>
              <option value="OUT_FOR_DELIVERY">Out For Delivery</option>
              <option value="DELIVERED">Delivered</option>
            </select>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default DeliveryTracking;