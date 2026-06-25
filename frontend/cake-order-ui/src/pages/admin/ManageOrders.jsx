import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../services/productService";
import "../../styles/Admin.css";

function ManageProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this product?")) return;

    await deleteProduct(id);
    alert("Product deleted successfully");
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
              <th>Actions</th>
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
                <td className="admin-actions">
                  <button
                    className="edit-btn"
                    onClick={() => navigate(`/admin/edit-product/${p.id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(p.id)}
                  >
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