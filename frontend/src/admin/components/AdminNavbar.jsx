import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { logout } from '../../redux/authSlice';
import { FaUserCircle } from "react-icons/fa";

const AdminNavbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu,setShowMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  
  return (
    
   <div className="flex justify-between items-center bg-white shadow-md px-6 py-3">
      <h1 className="text-xl font-semibold">Blog Website</h1>

      <div className="relative">
        <button onClick={() => setShowMenu(!showMenu)}>
          <FaUserCircle size={28} />
        </button>
         
        {showMenu && (
          <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        )}

      </div>
   </div>
      
   
  )
}

export default AdminNavbar
