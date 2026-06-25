import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

import "../styles/Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
  const { isAuthenticated, userEmail, logout } = useAuth();

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Link to="/" className="nav-logo">
        🌸 CakeBloom
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/products">Products</NavLink>

        {isAuthenticated && (
          <NavLink to="/orders">My Orders</NavLink>
        )}

        {isAuthenticated && (
          <NavLink to="/admin">Admin</NavLink>
        )}

        {isAuthenticated && (
          <NavLink to="/delivery">Delivery</NavLink>
        )}

        <NavLink to="/cart" className="cart-link">
          <FaShoppingCart />
          Cart
          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </NavLink>

        {!isAuthenticated ? (
          <>
            <NavLink to="/login">Login</NavLink>

            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <>
            <span className="nav-user">
              <FaUserCircle />
              {userEmail}
            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;