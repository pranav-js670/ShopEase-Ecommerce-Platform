import React from "react";
import Layout from "../components/Layout/Layout";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <Layout
      title="About Us - ShopEase"
      description="Learn more about ShopEase, our mission, and values."
      keywords="about us, ShopEase, ecommerce"
      author="Pranav J S"
    >
      <div
        className="about-hero"
        style={{
          backgroundImage: 'url("/images/about-hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "25vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
            About ShopEase
          </h1>
          <p style={{ fontSize: "16px", marginTop: "10px" }}>
            Your trusted partner for a seamless shopping experience.
          </p>
        </div>
      </div>

      <div
        className="about-content"
        style={{
          padding: "60px 20px",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
          marginTop: "20px", // Add margin to create space below the hero section
        }}
      >
        <h2
          style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "40px" }}
        >
          Who We Are
        </h2>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          Welcome to ShopEase, your one-stop destination for all your shopping
          needs. We are a dedicated team of passionate professionals committed
          to providing the best quality products at unbeatable prices. Our
          mission is to deliver exceptional customer service while offering a
          wide range of products to meet the diverse needs of our customers.
        </p>

        <p
          style={{
            maxWidth: "800px",
            margin: "40px auto",
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          Since our inception, we have focused on creating a seamless and
          enjoyable shopping experience, powered by the latest technology and a
          customer-first approach. Whether you're looking for the latest trends,
          everyday essentials, or special gifts, we aim to bring you an
          unrivaled selection of products from top brands and emerging
          designers.
        </p>
      </div>

      <div
        className="about-values"
        style={{
          backgroundColor: "#fff",
          padding: "60px 20px",
          textAlign: "center",
          marginTop: "20px", // Add margin to create space below the about content
        }}
      >
        <h2
          style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "40px" }}
        >
          Our Values
        </h2>
        <div
          className="values-grid"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div
            className="value-item"
            style={{
              backgroundColor: "#f9f9f9",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              width: "28%",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <FaStar
              size={50}
              style={{ color: "#007bff", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Quality</h3>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
              At ShopEase, we pride ourselves on providing top-notch products
              from trusted brands and emerging designers, ensuring our customers
              always receive the best.
            </p>
          </div>

          <div
            className="value-item"
            style={{
              backgroundColor: "#f9f9f9",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              width: "28%",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <FaHeart
              size={50}
              style={{ color: "#007bff", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Customer-Centric
            </h3>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
              We put our customers first, striving to provide a seamless
              shopping experience with exceptional customer service.
            </p>
          </div>

          <div
            className="value-item"
            style={{
              backgroundColor: "#f9f9f9",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              width: "28%",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <FaShoppingCart
              size={50}
              style={{ color: "#007bff", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Innovation</h3>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
              We are always looking for new ways to improve our platform,
              enhance the shopping experience, and stay ahead of industry
              trends.
            </p>
          </div>
        </div>
      </div>

      <div
        className="about-final"
        style={{
          padding: "40px 20px",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
          marginTop: "20px", // Add margin to create space below the values section
        }}
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "30px" }}
        >
          Thank You for Choosing ShopEase
        </h2>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          At ShopEase, we believe in innovation, quality, and trust. We’re
          constantly improving our services and expanding our offerings to
          provide you with the best online shopping experience possible. Thank
          you for choosing us as your trusted e-commerce partner.
        </p>
      </div>

      <div style={{ marginBottom: "40px" }}></div>
    </Layout>
  );
};

export default About;
