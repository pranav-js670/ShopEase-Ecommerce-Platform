import React from "react";
import { NavLink } from "react-router-dom";
import { FaListAlt, FaPlus, FaUsers, FaEdit } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <div className="admin-menu text-center">
      <h4 className="admin-menu-title">Admin Control Panel</h4>
      <div className="list-group">
        <NavLink
          to="/dashboard/admin/create-category"
          className="list-group-item list-group-item-action"
        >
          <FaListAlt className="me-2" /> Manage Categories
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item list-group-item-action"
        >
          <FaPlus className="me-2" /> Add New Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className="list-group-item list-group-item-action"
        >
          <FaUsers className="me-2" /> View All Users
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item list-group-item-action"
        >
          <FaPlus className="me-2" /> Add New Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="list-group-item list-group-item-action"
        >
          <FaEdit className="me-2" /> View All Products
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
