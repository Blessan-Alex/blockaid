"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Madimi_One } from "next/font/google";
import Navbarx from "@/components/ui/Navbarx";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const Madimi = Madimi_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-radial from-white to-black">
      <Navbarx fontname={Madimi.className} />

      <h1
        className={`
          pt-24 pb-24 px-5
          text-[12rem]
          text-center
          bg-gradient-to-r from-pink-500 to-yellow-500
          bg-clip-text text-transparent
          hover:cursor-pointer
          ${Madimi.className}
        `}
      >
        BLOCKAID !
      </h1>

      <div className="flex justify-center">
        <AnimatePresence>
          <motion.div
            layout
            className={`
              relative
              flex items-center justify-center
              ${expanded ? "w-full max-w-xl" : "w-auto rounded-full overflow-hidden"}
            `}
          >
            <motion.button
              onClick={() => setExpanded(true)}
              className={`
                relative
                
                rounded-full
                text-white
                shadow-lg shadow-pink-500/20
                transition-colors duration-300  
                hover:from-pink-600 hover:to-yellow-600 
                ${expanded ? "w-full px-14 py-6 rounded-full  " : "px-12   text-xl py-6 "}
                ${
                  expanded
                    ? ""
                    : "bg-gradient-to-tr from-pink-500 to-yellow-500"
                }
              `}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {expanded ? (
                <motion.div
                  className="flex justify-between gap-4 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div
                    onClick={() => router.push("/register")}
                    className="
                      flex-1
                      bg-gradient-to-r from-pink-500 to-yellow-500
                      hover:from-pink-600 hover:to-yellow-600
                      text-white font-thin text-xl
                      py-4 rounded-full w-1/2
                      transition-all duration-200
                      shadow-lg shadow-pink-500/20
                    "
                  >
                    User
                  </div>
                  <div
                    className="
                      flex-1
                      bg-gradient-to-r from-pink-500 to-yellow-500
                      hover:from-pink-600 hover:to-yellow-600
                      text-white font-thin text-xl
                      py-4 rounded-full w-1/2
                      transition-all duration-200
                      shadow-lg shadow-pink-500/20
                    "
                  >
                    Admin
                  </div>
                </motion.div>
              ) : (
                "Create"
              )}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
