'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import analyzeImage from "@/utils/analyzeImage"; // Import the analyzeImage function

export default function HealthCheckup() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      setLoading(true);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 100));
      }, 300);
      const analysisResult = await analyzeImage(image);
      clearInterval(interval);
      setLoading(false);
      setResult(analysisResult);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <motion.h1
        className="text-6xl font-bold mt-8 mb-16 text-center text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Health Checkup
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="space-y-2 w-full">
          <label htmlFor="image" className="block text-base font-medium text-center">
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
        {image && (
          <motion.div
            className="w-full bg-white border border-gray-300 rounded-xl shadow-lg p-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        )}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg text-xl mt-4"
        >
          Analyze
        </Button>
      </motion.form>
      {loading && (
        <motion.div
          className="w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-lg p-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center mb-4">Analyzing Image...</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </motion.div>
      )}
      {result && (
        <motion.p
          className="mt-8 text-center bg-white border border-gray-300 rounded-xl shadow-lg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {result}
        </motion.p>
      )}
    </div>
  );
}