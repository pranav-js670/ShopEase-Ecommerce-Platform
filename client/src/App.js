import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Carerrs from "./pages/Careers";
import Blog from "./pages/Blog";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/Private";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/cart" element={<CartPage></CartPage>} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard></Dashboard>} />
          <Route path="user/profile" element={<Profile></Profile>} />
          <Route path="user/orders" element={<Orders></Orders>} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard></AdminDashboard>} />
          <Route
            path="admin/create-category"
            element={<CreateCategory></CreateCategory>}
          />
          <Route
            path="admin/create-product"
            element={<CreateProduct></CreateProduct>}
          />
          <Route path="admin/products" element={<Products></Products>} />
          <Route
            path="admin/product/:slug"
            element={<UpdateProduct></UpdateProduct>}
          />
          <Route path="admin/users" element={<Users></Users>} />
        </Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/policy" element={<Policy></Policy>} />
        <Route path="/careers" element={<Carerrs></Carerrs>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/*" element={<Pagenotfound></Pagenotfound>} />
      </Routes>
    </>
  );
}

export default App;
