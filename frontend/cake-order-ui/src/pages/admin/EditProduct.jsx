import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProducts, updateProduct } from "../../services/productService";
import "../../styles/Admin.css";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    stock: "",
    category: "CAKE",
  });

  useEffect(() => {
    const loadProduct = async () => {
      const products = await getAllProducts();
      const product = products.find((p) => String(p.id) === String(id));

      if (product) {
        setForm({
          name: product.name || "",
          description: product.description || "",
          price: product.price || "",
          imageUrl: product.imageUrl || "",
          stock: product.stock || "",
          category: product.category || "CAKE",
        });
      }
    };

    loadProduct();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await updateProduct(id, {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    });

    alert("Product updated successfully");
    navigate("/admin/products");
  };

  return (
    <section className="admin-page">
      <form className="admin-form" onSubmit={handleUpdate}>
        <h1>Edit Product</h1>

        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          required
        />

        <select name="category" value={form.category} onChange={handleChange}>
          <option value="CAKE">Cake</option>
          <option value="BOUQUET">Bouquet</option>
          <option value="COMBO">Combo</option>
        </select>

        <button type="submit">Update Product</button>
      </form>
    </section>
  );
}

export default EditProduct;