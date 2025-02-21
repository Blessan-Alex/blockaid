'use client'
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import analyzeImage from "@/utils/analyzeImage"; // Import the analyzeImage function

export default function HealthCheckup() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      const analysisResult = await analyzeImage(image);
      setResult(analysisResult);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold mb-8">Health Checkup</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <label htmlFor="image" className="block text-base font-medium">
            Upload a close-up photo of your face
          </label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="w-full bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg text-xl"
        >
          Analyze
        </Button>
      </form>
      {result && <p className="mt-4 text-center">{result}</p>}
    </div>
  );
}
