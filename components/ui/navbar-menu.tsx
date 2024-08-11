// components/navbar-menu.tsx
"use client";
//import React from "react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white text-lg"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            // <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 ">
            <div className="absolute top-[calc(100%_+_1.1 rem)] left-1/2 transform -translate-x-1/2 pt-4 ">
            {/* <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2"> */}

              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4 menu-content" // Added menu-content class
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-6 px-8 py-6 md:px-4 md:py-3 md:space-x-3"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  src,
  videoSrc,
  type,
  posterSrc, // Add this prop for the poster image
  onClick,
  githubLink,
}: {
  title: string;
  description: string;
  src?: string;
  videoSrc?: string;
  type?: string;
  posterSrc?: string; // Add this prop for the poster image
  onClick?: () => void;
  githubLink?: string;
}) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {videoSrc ? (
        <video
          width={160}
          height={90}
          muted
          poster={posterSrc} // Set the poster image
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => e.currentTarget.pause()}
          disablePictureInPicture
          className="flex-shrink-0 rounded-md shadow-2xl"
        >
          <source src={videoSrc} type={type} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={src}
          width={140}
          height={70}
          alt={title}
          className="flex-shrink-0 rounded-md shadow-2xl"
        />
      )}
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
};


// export const ProductItem = ({
//   title,
//   description,
//   src,
//   videoSrc,
//   type,
//   onClick,
// }: {
//   title: string;
//   description: string;
//   src?: string;
//   videoSrc?: string;
//   type?: string;
//   onClick?: () => void;
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="cursor-pointer"
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {videoSrc && isHovered ? (
//         <video
//           width={160}
//           height={90}
//           autoPlay
//           muted
//           disablePictureInPicture
//           className="flex-shrink-0 rounded-md shadow-2xl"
//         >
//           <source src={videoSrc} type={type} />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <Image
//           src={src}
//           width={140}
//           height={70}
//           alt={title}
//           className="flex-shrink-0 rounded-md shadow-2xl"
//         />
//       )}
//       <div>
//         <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
//           {title}
//         </h4>
//         <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export const ProductItem = ({
//   title,
//   description,
//   //href,
//   src,
//   type,
//   videoSrc,
//   onClick,
//   githubLink,
// }: {
//   title: string;
//   description: string;
//   //href: string;
//   src?: string;
//   videoSrc?: string;
//   type?: string;
//   onClick?: () => void;
//   githubLink?: string;
// }) => {
//   return (
//     <div className="cursor-pointer" onClick={onClick}>
//       {videoSrc ? (
//         <video
//           width={160}
//           height={90}
//           autoPlay
//           loop
//           muted
//           disablePictureInPicture
//           className="flex-shrink-0 rounded-md shadow-2xl"
//         >
//           <source src={videoSrc} type={type} />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <Image
//           src={src}
//           width={140}
//           height={70}
//           alt={title}
//           className="flex-shrink-0 rounded-md shadow-2xl"
//         />
//       )}
//       <div>
//         <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
//           {title}
//         </h4>
//         <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

export const HoveredLink = ({ children, onClick, ...rest }: any) => {
  return (
    <Link
      {...rest}
      onClick={onclick}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
