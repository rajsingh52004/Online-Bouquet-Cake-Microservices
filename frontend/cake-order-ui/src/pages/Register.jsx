import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { registerUser } from "../services/authService";
import "../styles/Auth.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <section className="auth-page">
      <motion.form
        className="auth-card"
        onSubmit={handleRegister}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span>Create Account</span>
        <h1>Register</h1>

        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </motion.form>
    </section>
  );
}

export default Register;