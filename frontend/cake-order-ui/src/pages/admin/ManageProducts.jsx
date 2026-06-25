import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../services/productService";
import "../../styles/Admin.css";

function ManageProducts() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this product?")) return;
    await deleteProduct(id);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="admin-page">
      <div className="admin-header">
        <span>Products</span>
        <h1>Manage Products</h1>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>₹{p.price}</td>
                <td>{p.stock}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(p.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ManageProducts;