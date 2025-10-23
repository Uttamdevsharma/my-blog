import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get("http://localhost:3000/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStats(res.data.data);
    };
    fetchStats();
  }, [token]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl mt-2">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-lg font-semibold">Total Blogs</h3>
          <p className="text-3xl mt-2">{stats.totalBlogs}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
