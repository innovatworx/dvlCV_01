// components/Overlay.tsx
"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Overlay = ({ isActive }: { isActive: boolean }) => {
  useEffect(() => {
    if (isActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isActive]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 pointer-events-none ${
        isActive ? "block" : "hidden"
      }`}
    ></motion.div>
  );
};

export default Overlay;
