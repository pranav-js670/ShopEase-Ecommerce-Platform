import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="user-menu-container text-center py-4">
      <h4 className="menu-heading text-uppercase mb-4">User Dashboard</h4>
      <div className="list-group">
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action user-menu-link"
        >
          <i className="bi bi-person-circle me-2"></i>
          Manage Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action user-menu-link"
        >
          <i className="bi bi-bag-check me-2"></i>
          View Orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
