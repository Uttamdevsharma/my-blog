import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBloggerB } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-600 text-white p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <NavLink to="/admin/dashboard" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
        <FaHome /> <span>Dashboard</span>
      </NavLink>
      <NavLink to="/admin/manage-blogs" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
        <FaBloggerB /> <span>Blogs</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
