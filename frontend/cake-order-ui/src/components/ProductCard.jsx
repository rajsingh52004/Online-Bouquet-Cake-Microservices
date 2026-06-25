import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const fallbackImage =
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900";

  const image =
    product.imageUrl && product.imageUrl.startsWith("http")
      ? product.imageUrl
      : fallbackImage;

  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 240 }}
    >
      <div className="product-img-wrap">
        <img src={image} alt={product.name} />
      </div>

      <div className="product-card-body">
        <span>{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-meta">
          <small>Stock: {product.stock}</small>
        </div>

        <div className="product-card-bottom">
          <strong>₹{product.price}</strong>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;