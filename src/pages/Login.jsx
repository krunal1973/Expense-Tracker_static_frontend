import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth.api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await loginUser(formData);

      const token = res.data.data.accessToken;

      localStorage.setItem("token", token);

      navigate("/dashboard");

    } catch (error) {

      console.error(error.response?.data?.message);

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 sm:p-8">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?
          <Link to="/register" className="text-blue-600 ml-1 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;