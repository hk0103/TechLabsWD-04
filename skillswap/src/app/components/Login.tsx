'use client'; 

import React, { useState } from 'react'; 

const LoginFormComponent = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Function to handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; // Extract name and value from the input field
    setFormData((prev) => ({ ...prev, [name]: value })); // Update the corresponding field in the state
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log('Form submitted:', formData); // Logs form data (replace with actual login logic)
  };

  return (
    // Centering the form using flexbox
    <div className="flex justify-center items-center h-screen">
      
      {/* Login Form Container */}
      <form onSubmit={handleSubmit} className="w-96 p-6 bg-white rounded-lg shadow-lg">
        
        {/* Form Title */}
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        {/* Username Input Field */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Password Input Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Login Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-md"
          >
            Login
          </button>
        </div>

      </form>
    </div>
  );
};

export default LoginFormComponent; 