import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import "../styles/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("ALL");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchCategory = category === "ALL" || product.category === category;
    const matchSearch = product.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  if (loading) {
    return <h2 className="loading-text">Loading products...</h2>;
  }

  return (
    <section className="products-page">
      <motion.div
        className="products-header"
        initial={{ y: 45, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span>Fresh Collection</span>
        <h1>Our Premium Products</h1>
        <p>Choose from cakes, bouquets and celebration combos.</p>
      </motion.div>

      <div className="product-tools">
        <input
          type="text"
          placeholder="Search cake, bouquet..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="ALL">All Categories</option>
          <option value="CAKE">Cake</option>
          <option value="BOUQUET">Bouquet</option>
          <option value="COMBO">Combo</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <h2 className="empty-text">No products found.</h2>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.12 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;