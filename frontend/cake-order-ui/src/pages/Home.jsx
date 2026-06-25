import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import "../styles/Home.css";

function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".floating-card",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.18, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-left">
          <motion.span
            className="hero-badge"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Premium Bouquet & Cake Delivery
          </motion.span>

          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Make Every Celebration Sweeter & More Beautiful
          </motion.h1>

          <motion.p
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            Order fresh cakes, luxury bouquets and celebration combos for
            birthdays, anniversaries, weddings and office promotions.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <Link to="/products" className="primary-btn">
              Explore Products
            </Link>
            <Link to="/orders" className="secondary-btn">
              Track Orders
            </Link>
          </motion.div>
        </div>

        <div className="hero-right">
          <div className="hero-image-box">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900"
              alt="Cake"
            />
          </div>

          <div className="floating-card card-one">🎂 Fresh Cakes</div>
          <div className="floating-card card-two">🌹 Premium Flowers</div>
          <div className="floating-card card-three">🎁 Gift Combos</div>
        </div>
      </section>
    </main>
  );
}

export default Home;