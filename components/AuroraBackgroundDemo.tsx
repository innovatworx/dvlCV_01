"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

const lines = [
  "Background lights are cool you know.",
  "Welcome to my portfolio.",
  "Debug now",
];

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.9, // Adjust the delay for staggering
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-3xl md:text-7xl font-bold dark:text-white text-center"
          >
            {line}
          </motion.div>
        ))}
      </div>
    </AuroraBackground>
  );
}



