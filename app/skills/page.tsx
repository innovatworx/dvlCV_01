
"use client";

import { AuroraBackground } from '@/components/ui/aurora-background';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { motion } from 'framer-motion';
import React from 'react'


const lines = [
  "Skills",
  ["UI/UX", "Designing Web/App interfaces"],
  ["Web Development", "HTML/CSS/SASS, JavaScript, jQuery, Angular, React, React Native"],
  ["App Development", "Building Android/iOS apps"],
  ["Design and Creativity", "Adobe Creative Cloud/Suite, Blender"],
  ["Database Management", "MySQL, MongoDB, NoSQL,SQL, MariaDB"],
  ["Programming Languages", "C#, C++, Python, SQL, Java, Apple Xcode"],
  ["Microsoft Technologies", "Microsoft Endpoint Configuration Manager (MECM/SCCM), MS O365, MS Active Directory"],
];


const page = () => {
  return (
    <AuroraBackground>
      <div className="relative flex flex-col gap-4 items-start justify-center min-h-screen px-4 py-7">
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
            className={`${index === 0 
              ? 'text-4xl md:text-6xl mb-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20 md:mb-4' 
                : 'text-xl md:text-2xl'
              // ? 'text-4xl md:text-7xl mb-10' : 'text-xl md:text-2xl'
              } font-bold dark:text-white text-center`}
          >
            {index === 0 ? (
              line
            ) : (
              <div className="text-left">
                <div className="flex items-center">
                  <span className="mr-2 text-base md:text-lg">• {line[0]}</span>
                </div>
                <div className="ml-10 text-sm md:text-base">{line[1]}</div>
                {/* <div className="ml-8 text-sm md:text-base">{line[1]}</div> */}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </AuroraBackground>
  );
};

export default page
