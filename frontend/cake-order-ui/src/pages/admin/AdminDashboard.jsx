import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/Admin.css";

function AdminDashboard() {
  return (
    <section className="admin-page">
      <motion.div className="admin-header" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <span>Admin Panel</span>
        <h1>CakeBloom Dashboard</h1>
        <p>Manage products and orders from one place.</p>
      </motion.div>

      <div className="admin-cards">
        <Link to="/admin/add-product" className="admin-card">➕ Add Product</Link>
        <Link to="/admin/products" className="admin-card">📦 Manage Products</Link>
        <Link to="/admin/orders" className="admin-card">🧾 Manage Orders</Link>
      </div>
    </section>
  );
}

export default AdminDashboard;