import React from "react";
import Layout from "../components/Layout/Layout";
import { FaShieldAlt, FaFileContract, FaUserShield } from "react-icons/fa";

const Policy = () => {
  return (
    <Layout
      title="Privacy Policy - ShopEase"
      description="Read our privacy policy to understand how we handle your data."
      keywords="privacy policy, data protection, ShopEase"
      author="Pranav J S"
    >
      <div
        className="policy-hero"
        style={{
          backgroundImage: 'url("/images/policy-hero.jpg")',
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Our Policies</h1>
          <p style={{ fontSize: "16px", marginTop: "10px" }}>
            Your privacy and security are our top priorities. Learn more about
            our policies.
          </p>
        </div>
      </div>

      <div
        className="policy-content"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "40px 20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          className="policy-section"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            margin: "20px",
            width: "30%",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <FaUserShield
            size={50}
            style={{ color: "#007bff", marginBottom: "15px" }}
          />
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Privacy Policy
          </h2>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
            We are committed to protecting your privacy and ensuring that your
            personal information is secure. Review how we collect and use your
            data.
          </p>
          <button
            className="btn btn-outline-primary"
            style={{ marginTop: "15px" }}
          >
            Learn More
          </button>
        </div>

        <div
          className="policy-section"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            margin: "20px",
            width: "30%",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <FaFileContract
            size={50}
            style={{ color: "#007bff", marginBottom: "15px" }}
          />
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Terms of Service
          </h2>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
            By accessing or using our website, you agree to abide by our terms
            and conditions. Read more about our service terms.
          </p>
          <button
            className="btn btn-outline-primary"
            style={{ marginTop: "15px" }}
          >
            Learn More
          </button>
        </div>

        <div
          className="policy-section"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            margin: "20px",
            width: "30%",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <FaShieldAlt
            size={50}
            style={{ color: "#007bff", marginBottom: "15px" }}
          />
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Data Protection
          </h2>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
            We take data protection seriously. Learn how we ensure the safety
            and security of your information.
          </p>
          <button
            className="btn btn-outline-primary"
            style={{ marginTop: "15px" }}
          >
            Learn More
          </button>
        </div>
      </div>

      <div
        className="policy-details"
        style={{
          padding: "40px 20px",
          backgroundColor: "#fff",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          Detailed Policies
        </h2>

        <div
          className="policy-item"
          style={{
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Information We Collect
          </h3>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8" }}>
            We may collect your personal information to provide better services
            and ensure a personalized experience. This includes contact
            information, preferences, and feedback.
          </p>
        </div>

        <div
          className="policy-item"
          style={{
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Use of Your Information
          </h3>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8" }}>
            Your information will only be used to enhance our services,
            including sending you promotional content or updates about our
            latest products.
          </p>
        </div>

        <div
          className="policy-item"
          style={{
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Data Protection
          </h3>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8" }}>
            We are committed to protecting your data with secure systems and
            protocols. Learn about how we manage and store your data safely.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
