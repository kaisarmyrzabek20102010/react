import React, { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-indigo-200 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
        <div className="flex justify-between mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 font-semibold transition border-b-2 ${
              isLogin ? "text-green-600 border-green-600" : "text-gray-400 border-transparent"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 font-semibold transition border-b-2 ${
              !isLogin ? "text-green-600 border-green-600" : "text-gray-400 border-transparent"
            }`}
          >
            Register
          </button>
        </div>

        <div className="relative h-[400px]">
          <form
            className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
              isLogin
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 -translate-x-full z-0 pointer-events-none"
            }`}
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
              />
              <i className="bx bxs-user absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
              />
              <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-800">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
            >
              Login
            </button>
            <p className="text-sm mt-6 text-center text-gray-600">
              or login with social platforms
            </p>
            <div className="flex justify-center mt-4 space-x-4 text-2xl text-gray-600">
              <a href="#"><i className="bx bxl-google" /></a>
              <a href="#"><i className="bx bxl-facebook" /></a>
              <a href="#"><i className="bx bxl-github" /></a>
              <a href="#"><i className="bx bxl-linkedin" /></a>
            </div>
          </form>

          <form
            className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
              !isLogin
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 translate-x-full z-0 pointer-events-none"
            }`}
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
              />
              <i className="bx bxs-user absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="mb-4 relative">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
              />
              <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
            >
              Register
            </button>
            <p className="text-sm mt-6 text-center text-gray-600">
              or register with social platforms
            </p>
            <div className="flex justify-center mt-4 space-x-4 text-2xl text-gray-600">
              <a href="#"><i className="bx bxl-google" /></a>
              <a href="#"><i className="bx bxl-facebook" /></a>
              <a href="#"><i className="bx bxl-github" /></a>
              <a href="#"><i className="bx bxl-linkedin" /></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
