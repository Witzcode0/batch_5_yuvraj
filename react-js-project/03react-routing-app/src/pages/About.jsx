import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2>About Us</h2>

        <p className="about-intro">
          Welcome to <strong>MyShop</strong> — your one-stop destination for
          quality products at the best prices.
        </p>

        <div className="about-section">
          <h3>Who We Are</h3>
          <p>
            We are a passionate team dedicated to bringing you the latest and
            most reliable products in electronics, fashion, and books. Our goal
            is to make online shopping simple, fast, and enjoyable.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            To deliver high-quality products with exceptional customer service
            while continuously improving our platform to serve you better
            every day.
          </p>
        </div>

        <div className="about-section">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✔ Wide range of quality products</li>
            <li>✔ Secure and easy checkout</li>
            <li>✔ Fast delivery</li>
            <li>✔ Friendly customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
