// pages/about.tsx
"use client";

import Navbar from '@/components/Navbar';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'framer-motion';
import React from 'react';

const lines = [
  "About Me",
  ["Motivated IT professional with a strong foundation in cloud computing web development, and network security. Dedicated to optimizing system performance, deploying innovate solutions, and staying current with industry trends. Seeking opportunties as a"],
  
];

const page = () => {
  return (
    <AuroraBackground>
      <div className="relative flex flex-col gap-8 items-center justify-center px-24">
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
            className={`${index === 0 ? 'text-4xl md:text-7xl mb-10' : 'text-xl md:text-2xl'
              } font-bold dark:text-white text-center`}
          >
            {index === 0 ? (
              line
            ) : (
              <div className="text-center">
                <div className="flex items-center">
                  <span className="mr-2 text-base md:text-lg"> {line[0]}</span>
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

// export default function About() {
//   return (
//     <div>
//       <Navbar />
//       <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-8">
//         <h1 className="text-6xl mb-4 animate-fadeIn">About Me</h1>
//         <p className="text-2xl animate-fadeIn">I am a Web Developer with a passion for creating stunning websites.</p>
//         <p className='animate-fadeIn'>Motivated IT professional with a strong foundation in cloud computing,
//           web development, and network security. Dedicated to optimizing system
//           performance, deploying innovate solutions, and staying current with industry
//           trends. Seeking opportunties as a</p>

//         <div className="mt-8">
//           <h2 className="text-4xl">Work Experience</h2>
//           <p className="text-xl">Web Developer at XYZ Company</p>
//         </div>
//         <div className="mt-8">
//           <h2 className="text-4xl">Education</h2>
//           <p className="text-xl">B.Sc. in Computer Science</p>
//         </div>
//       </section>
//     </div>
//   );
// }
