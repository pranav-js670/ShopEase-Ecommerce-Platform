import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all categories
  const getAllCategory = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data.category);
      } else {
        message.error(data?.message || "Unable to fetch categories");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      message.error("Oops! Something went wrong while fetching categories");
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Handle product creation
  const handleCreate = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !description ||
      !price ||
      !quantity ||
      !category ||
      !shipping ||
      !photo
    ) {
      message.error("All fields are mandatory. Please fill them all!");
      return;
    }

    setLoading(true);
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      productData.append("shipping", shipping);

      const { data } = await axios.post(
        "/api/v1/product/create-product",
        productData
      );

      if (data?.success) {
        message.success("🎉 Product Created Successfully! 🚀");
        navigate("/dashboard/admin/products");

        // Reset form fields
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setPhoto(null);
        setCategory("");
        setShipping("");
      } else {
        message.error(data?.message || "Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      message.error("Oh no! Something went wrong while creating the product");
    }
    setLoading(false);
  };

  return (
    <Layout title="Dashboard - Manage Your Products">
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2 className="mb-4">Manage Products</h2>
            <div className="m-1 w-75 shadow p-4 bg-light rounded">
              {/* Category Select */}
              <div className="mb-3">
                <label htmlFor="category" className="form-label fw-bold">
                  Select a Category
                </label>
                <select
                  id="category"
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={loading}
                >
                  <option value="">Choose a category...</option>
                  {categories.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Photo Upload */}
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "📷 Upload Product Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>

              {/* Photo Preview */}
              {photo && (
                <div className="mb-3 text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product_preview"
                    height="200px"
                    className="img img-responsive rounded shadow"
                  />
                </div>
              )}

              {/* Product Name */}
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="✨ Enter Product Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Product Description */}
              <div className="mb-3">
                <textarea
                  value={description}
                  placeholder="📝 Write a detailed description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Product Price */}
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="💲 Set a Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              {/* Product Quantity */}
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="🔢 Enter Quantity Available"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              {/* Shipping Select */}
              <div className="mb-3">
                <label htmlFor="shipping" className="form-label fw-bold">
                  Shipping Options
                </label>
                <select
                  id="shipping"
                  className="form-select"
                  value={shipping}
                  onChange={(e) => setShipping(e.target.value)}
                  disabled={loading}
                >
                  <option value="">Select Shipping Preference...</option>
                  <option value="0">🚫 No Shipping</option>
                  <option value="1">✅ Yes, Shipping Available</option>
                </select>
              </div>

              {/* Create Product Button */}
              <div className="mb-3 text-center">
                <button
                  className="btn btn-primary w-100"
                  onClick={handleCreate}
                  disabled={loading}
                >
                  {loading ? "🌟 Creating..." : "✨ CREATE PRODUCT"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
