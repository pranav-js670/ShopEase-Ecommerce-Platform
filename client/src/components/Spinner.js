import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location]);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f6f8fa",
      color: "#333",
      fontFamily: "'Montserrat', sans-serif",
    },
    title: {
      fontSize: "2rem",
      fontWeight: 600,
      marginBottom: "15px",
      color: "#6c63ff",
    },
    spinner: {
      width: "3rem",
      height: "3rem",
      border: "8px solid #ddd",
      borderTopColor: "#6c63ff",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      marginBottom: "15px",
    },
    message: {
      fontSize: "1rem",
      color: "#777",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Redirecting you in {count} second{count !== 1 ? "s" : ""}
      </h1>
      <div style={styles.spinner} role="status"></div>
      <p style={styles.message}>Please wait while we redirect you...</p>
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;
