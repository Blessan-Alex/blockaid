'use client'
import { useRouter } from 'next/navigation'; // Import useRouter from next/router

export default function BasePage() {
  const router = useRouter(); // Initialize useRouter

  const handleHealthCheckup = () => {
    router.push('/health-checkup'); // Redirect to health checkup page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to BLOCKAID!</h1>
      <div className="w-full max-w-md space-y-4">
        <button
          onClick={handleHealthCheckup}
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg text-xl"
        >
          Health Checkup
        </button>
        <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg text-xl">
          Excess Food Collection
        </button>
        <button className="w-full bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg text-xl">
          Other Options Coming Soon
        </button>
      </div>
    </div>
  );
}
