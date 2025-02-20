import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const quotes = [
  "Blockchain is the future of the internet.",
  "Decentralization is the key to freedom.",
  "Trust in code, not in people.",
  "Empowering individuals through technology.",
];

const TextAnimation = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              staggerChildren: 0.2,
            },
          }}
          exit={{ opacity: 0 }}
          className="flex flex-wrap items-center gap-y-4"
        >
          {quotes[currentQuote].split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                },
              }}
              exit={{ opacity: 0, y: -20 }}
              className="inline-flex text-4xl py-4 md:text-5xl lg:text-6xl font-semibold tracking-wide text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text"
            >
              {word}
              <span className="mr-[0.25em]"> </span>
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextAnimation;
