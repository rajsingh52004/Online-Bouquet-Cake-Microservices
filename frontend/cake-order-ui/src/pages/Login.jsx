import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(form);
      login(data.token, form.email);
      alert("Login successful");
      navigate("/products");
    } catch (error) {
      console.error(error);
      alert("Invalid login details");
    }
  };

  return (
    <section className="auth-page">
      <motion.form
        className="auth-card"
        onSubmit={handleLogin}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span>Welcome Back</span>
        <h1>Login</h1>

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

        <button type="submit">Login</button>

        <p>
          New user? <Link to="/register">Create account</Link>
        </p>
      </motion.form>
    </section>
  );
}

export default Login;