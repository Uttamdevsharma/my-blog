import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { token, user } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!token) {
    // ❌ Login না থাকলে Login পেজে পাঠাও
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly && user?.role !== "admin") {
    // ❌ Admin-only পেজে সাধারণ user গেলে Unauthorized দেখাও
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ সব ঠিক থাকলে পেজ দেখাও
  return children;
};

export default ProtectedRoute;
