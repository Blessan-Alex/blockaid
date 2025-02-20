"use client";
const InputField = ({ label, id, ...props }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <Input
        id={id}
        {...props}
        className="w-full bg-slate-600/50 border-slate-500 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
};

// components/forms/AuthCard.jsx
const AuthCard = ({ children, title }) => {
  return (
    <div className="w-full max-w-md p-8 bg-gradient-to-b from-slate-700/90 to-slate-800/90 rounded-2xl backdrop-blur-sm shadow-xl border border-slate-700">
      <h1 className="text-3xl font-bold mb-8 text-white tracking-wider bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        {title}
      </h1>
      {children}
    </div>
  );
};

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TextAnimation from "@/components/ui/textAnimation";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    aadhar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2">
      {/* Form Section */}
      <div className="relative flex items-center justify-center p-8 bg-slate-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

        <AuthCard title="Register">
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Name"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />

            <InputField
              label="Aadhar Number"
              id="aadhar"
              name="aadhar"
              type="text"
              value={formData.aadhar}
              onChange={handleChange}
              required
              placeholder="1234 5678 9012"
              pattern="\d{4}\s?\d{4}\s?\d{4}"
              title="Please enter a valid 12-digit Aadhar number"
            />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20"
            >
              Create Account
            </Button>
          </form>
        </AuthCard>
      </div>

      {/* Hero/Branding Section */}
      <div className="hidden lg:block bg-slate-800">
        <div className="h-full flex items-center justify-center p-8">
          <TextAnimation />
        </div>
      </div>
    </div>
  );
}
