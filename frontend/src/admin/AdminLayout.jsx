import React from "react";
import Sidebar from "./components/Sidebar";
import AdminNavbar from "./components/AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* 🔹 উপরের Navbar - পুরো width নেবে */}
      <AdminNavbar />

      {/* 🔹 নিচের অংশে Sidebar (বাম পাশে) + Main Content (ডান পাশে) */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
