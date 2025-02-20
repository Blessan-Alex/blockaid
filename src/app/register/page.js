"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"; // Import InputOtp components
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

  const handleAadharChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      aadhar: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2 bg-white text-gray-900">
      {/* Form Section */}
      <div className="relative flex items-center justify-center p-12">
        <div className="w-full  p-12 bg-white rounded-3xl shadow-2xl border border-gray-300">
          <h1 className="text-4xl font-bold mb-10 tracking-wider text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">
            Register
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-base font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="aadhar" className="block text-base font-medium">
                Aadhar Number
              </label>
              <div className="flex items-center justify-start p-3">
                <InputOTP
                  maxLength={12}
                  value={formData.aadhar}
                  onChange={handleAadharChange}
                  className="flex justify-center"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                    <InputOTPSlot index={6} />
                    <InputOTPSlot index={7} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={8} />
                    <InputOTPSlot index={9} />
                    <InputOTPSlot index={10} />
                    <InputOTPSlot index={11} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold py-6 rounded-xl transition-all duration-200 shadow-lg text-xl shadow-pink-500/20"
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>

      {/* Branding / Animation Section */}
      <div className="hidden lg:flex items-center justify-center bg-white">
        <TextAnimation />
      </div>
    </div>
  );
}
