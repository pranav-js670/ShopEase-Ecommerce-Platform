import React from "react";
import Layout from "../components/Layout/Layout";

const Careers = () => {
  return (
    <Layout
      title="Careers - ShopEase"
      description="Join our team at ShopEase and help us shape the future of ecommerce."
      keywords="careers, job openings, ecommerce jobs"
      author="Pranav J S"
    >
      <div
        className="careers-hero"
        style={{
          backgroundImage: 'url("/images/careers-hero.jpg")',
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
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {" "}
            Join Our Team at ShopEase
          </h1>
          <p style={{ fontSize: "16px", marginTop: "5px" }}>
            We’re looking for passionate and talented individuals who want to
            make an impact.
          </p>
        </div>
      </div>
      <div
        className="job-openings"
        style={{ padding: "30px 0", marginBottom: "80px" }}
      >
        {" "}
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          {" "}
          Current Openings
        </h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div
              className="job-card"
              style={{
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <h3>Software Engineer</h3>
              <p style={{ fontSize: "14px", color: "#555", margin: "5px 0" }}>
                Location: Remote | Full-Time
              </p>
              <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                As a software engineer at ShopEase, you’ll be working on
                cutting-edge e-commerce solutions to improve the customer
                experience.
              </p>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="job-card"
              style={{
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <h3>Product Manager</h3>
              <p style={{ fontSize: "14px", color: "#555", margin: "5px 0" }}>
                Location: San Francisco, CA | Full-Time
              </p>
              <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                We are looking for an experienced product manager to lead our
                product team and shape the future of online shopping.
              </p>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="job-card"
              style={{
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <h3>Marketing Specialist</h3>
              <p style={{ fontSize: "14px", color: "#555", margin: "5px 0" }}>
                Location: Remote | Full-Time
              </p>
              <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                Join our marketing team to help promote our brand and products
                across various digital platforms.
              </p>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
