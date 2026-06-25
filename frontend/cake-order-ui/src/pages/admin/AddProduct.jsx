import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../services/productService";
import "../../styles/Admin.css";

function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    stock: "",
    category: "CAKE",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    });

    alert("Product added successfully");
    navigate("/admin/products");
  };

  return (
    <section className="admin-page">
      <form className="admin-form" onSubmit={handleSubmit}>
        <h1>Add Product</h1>

        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} />
        <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required />

        <select name="category" value={form.category} onChange={handleChange}>
          <option value="CAKE">Cake</option>
          <option value="BOUQUET">Bouquet</option>
          <option value="COMBO">Combo</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}

export default AddProduct;