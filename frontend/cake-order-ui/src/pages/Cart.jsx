import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <motion.div
          className="empty-cart"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Your Cart is Empty</h1>
          <p>Add cakes, bouquets or combos to continue.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <motion.div
        className="cart-header"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span>Your Selected Items</span>
        <h1>Shopping Cart</h1>
      </motion.div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item, index) => {
            const image =
              item.imageUrl && item.imageUrl.startsWith("http")
                ? item.imageUrl
                : "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900";

            return (
              <motion.div
                className="cart-item"
                key={item.id}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={image} alt={item.name} />

                <div className="cart-info">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                <div className="qty-box">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <strong>{item.quantity}</strong>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <h3 className="item-total">₹{item.price * item.quantity}</h3>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="cart-summary"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{cartTotal}</strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>₹49</strong>
          </div>

          <div className="summary-line"></div>

          <div className="summary-row total">
            <span>Total</span>
            <strong>₹{cartTotal + 49}</strong>
          </div>
          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Cart;