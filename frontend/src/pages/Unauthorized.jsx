// src/pages/Unauthorized.jsx
import React from "react";

const Unauthorized = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-3xl font-bold text-red-600 mb-2">Access Denied</h1>
    <p className="text-gray-700">You are not authorized to view this page.</p>
  </div>
);

export default Unauthorized;
