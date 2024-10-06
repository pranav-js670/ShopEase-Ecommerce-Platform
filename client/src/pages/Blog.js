import React from "react";
import Layout from "./../components/Layout/Layout";
import { FaChartLine, FaShoppingCart, FaSmile } from "react-icons/fa"; // Import icons

const Blog = () => {
  return (
    <Layout
      title="Blog - ShopEase"
      description="Stay updated with the latest news, tips, and insights from ShopEase."
      keywords="blog, ecommerce, updates"
      author="Pranav J S"
    >
      <div
        className="blog-hero"
        style={{
          backgroundImage: 'url("/images/blog-hero.jpg")',
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
          <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Our Blog</h1>
          <p style={{ fontSize: "16px", marginTop: "10px" }}>
            Discover the latest trends, tips, and insights from the world of
            e-commerce.
          </p>
        </div>
      </div>

      <div
        className="blog-posts"
        style={{ padding: "40px 20px", marginBottom: "80px" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          Latest Posts
        </h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div
              className="blog-card"
              style={{
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                minHeight: "400px", // Set a uniform height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaChartLine size={80} color="#007bff" />{" "}
              </div>
              <h3 style={{ marginTop: "15px", fontWeight: "bold" }}>
                E-Commerce Trends in 2024
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginTop: "10px",
                  flexGrow: 1,
                }}
              >
                Stay ahead of the curve with the latest trends that are
                reshaping the e-commerce industry in 2024.
              </p>
              <button className="btn btn-primary" style={{ marginTop: "10px" }}>
                Read More
              </button>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="blog-card"
              style={{
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaShoppingCart size={80} color="#007bff" />{" "}
              </div>
              <h3 style={{ marginTop: "15px", fontWeight: "bold" }}>
                How to Boost Online Sales
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginTop: "10px",
                  flexGrow: 1,
                }}
              >
                Learn the top strategies to increase your online store's sales
                and drive more customer engagement.
              </p>
              <button className="btn btn-primary" style={{ marginTop: "10px" }}>
                Read More
              </button>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="blog-card"
              style={{
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaSmile size={80} color="#007bff" />{" "}
              </div>
              <h3 style={{ marginTop: "15px", fontWeight: "bold" }}>
                Customer Experience in E-Commerce
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginTop: "10px",
                  flexGrow: 1,
                }}
              >
                Discover the key elements of a great customer experience that
                can set your e-commerce store apart.
              </p>
              <button className="btn btn-primary" style={{ marginTop: "10px" }}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
