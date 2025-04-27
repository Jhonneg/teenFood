import React, { useState, useEffect } from "react";

export default function Login({ isOpen, onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setError("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    onLogin({ email, password });
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div className="bg-white p-8 rounded-lg shadow-xl relative min-w-[300px] max-w-md w-[90%] transform transition-transform duration-300 ease-in-out">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-3xl leading-none font-semibold cursor-pointer p-0 bg-transparent border-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <h2
          id="login-modal-title"
          className="text-2xl font-semibold text-center text-gray-900 mb-6"
        >
          Login
        </h2>

        {error && (
          <p className="bg-red-100 border border-red-300 text-red-700 text-sm text-center p-3 rounded mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="login-email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email:
            </label>
            <input
              type="email"
              id="login-email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              className="w-full px-3 py-2 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            {" "}
            <label
              htmlFor="login-password"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Password:
            </label>
            <input
              type="password"
              id="login-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded text-lg cursor-pointer transition-colors duration-200 ease-in-out"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-5 text-sm">
          <a href="#forgot" className="text-gray-600 hover:underline">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
    </div>
  );
}
