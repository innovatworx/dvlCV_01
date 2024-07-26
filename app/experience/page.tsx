"use client";

import { AuroraBackground } from '@/components/ui/aurora-background';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { motion } from 'framer-motion';
import React from 'react'


const lines = [
  "Work Experience",
  ["2018 - 2023", "IT Support-Systems Administrator at JEFFERSON COUNTY COMMISSION"],
  ["2015 - 2017", "Digital Print Operator 2 at RR DONNELLEY"],
  ["2012 - 2014", "Preflight Technician/Graphic and Web Design at MSPARK"],
];

const page = () => {
  return (
    <AuroraBackground>
      <div className="relative flex flex-col gap-8 items-start justify-center px-4">
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
            className={`${
              index === 0 ? 'text-4xl md:text-7xl mb-12' : 'text-xl md:text-2xl'
            } font-bold dark:text-white text-center`}
          >
            {index === 0 ? (
              line
            ) : (
              <div className="text-left">
                <div className="flex items-center">
                  <span className="mr-2 text-base md:text-lg">• {line[0]}</span>
                </div>
                <div className="ml-8 text-sm md:text-base">{line[1]}</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </AuroraBackground>
  );
};

export default page