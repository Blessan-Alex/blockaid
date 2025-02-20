
'use client'

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Navbar({fontname}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md rounded-2xl mx-auto  translate-y-6 max-w-screen-lg px-16 py-4 ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`text-lg font-semibold ${fontname} text-gray-900  bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent`}>
          BlOCKAID !
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Pages", "Account", "Blocks", "Docs"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-700 font-medium hover:text-blue-500 transition-colors  bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          {["Pages", "Account", "Blocks", "Docs"].map((item) => (
            <Link
              key={item}
              href="#"
              className="block text-gray-700 font-medium hover:text-blue-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
