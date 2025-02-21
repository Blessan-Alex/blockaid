'use client'
import { useRouter } from 'next/navigation'; 
import { motion } from 'framer-motion'; 

export default function BasePage() {
  const router = useRouter(); 

  const handleHealthCheckup = () => {
    router.push('/health-checkup'); 
  };

  const handleExcessFoodCollection = () => {
    router.push('/excess-food-collection'); 
  };

  const handleOtherOptions = () => {
    alert('Other options coming soon!'); 
  };

  return (
    <div className="min-h-screen flex flex-col  items-center justify-center bg-gray-100 p-4">
      <motion.h1
        className="text-6xl font-bold mb-8  -translate-y-[400px] text-center text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to BLOCKAID!
      </motion.h1>
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.button
          onClick={handleHealthCheckup}
          className="w-full p-32 h-40 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg text-2xl flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Health Checkup
        </motion.button>
        <motion.button
          onClick={handleExcessFoodCollection}
          className="w-full h-40 p-32 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg text-2xl flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Excess Food Collection
        </motion.button>
        <motion.button
          onClick={handleOtherOptions}
          className="w-full p-32 h-40 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg text-2xl flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Other Options Coming Soon
        </motion.button>
      </div>
    </div>
  );
}