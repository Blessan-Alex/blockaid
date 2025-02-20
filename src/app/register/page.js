"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Register() {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="h-screen w-full grid grid-cols-2 grid-rows-1">
      <div className="bg-black flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl font-bold mb-6 text-white">Register</h1>
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 block w-full text-lg text-white"
            />
          </div>
          <div>
            <label
              htmlFor="aadhar"
              className="block text-lg font-medium text-white"
            >
              Aadhar Number
            </label>
            <Input
              id="aadhar"
              name="aadhar"
              type="text"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              required
              className="mt-2 block w-full text-lg text-white"
            />
          </div>
          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white py-3 px-6 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="bg-black"></div>
    </div>
  );
}
