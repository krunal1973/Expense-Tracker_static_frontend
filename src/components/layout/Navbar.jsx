import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <nav className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-lg md:text-xl font-bold">
          Expense Tracker
        </h1>

        {/* Desktop Profile Menu */}
        <div className="hidden md:relative md:flex">

          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
          >
            Profile ▾
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-12 w-40 bg-white text-black rounded shadow-lg">

              <button
                onClick={goToProfile}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                My Profile
              </button>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
              >
                Logout
              </button>

            </div>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">

          <button
            onClick={goToProfile}
            className="w-full bg-gray-700 px-4 py-2 rounded"
          >
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
          >
            Logout
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;