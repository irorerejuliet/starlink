import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?
          <Link to="/auth/login" className="ml-1 text-blue-600 font-semibold hover:underline cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
