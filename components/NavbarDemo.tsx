// components/navbarDemo.tsx
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Overlay from "./Overlay";

export function NavbarDemo() {
  const [active, setActive] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [selectedGithubLink, setSelectedGithubLink] = useState<string | null>(null);

  const handleVideoClick = (videoSrc: string, title: string, githubLink: string) => {
    setSelectedVideoSrc(videoSrc);
    setSelectedTitle(title);
    setSelectedGithubLink(githubLink);
    setShowVideo(true);
  };

  const handleCloseMenu = () => setActive(null);

  return (
    <div className="relative w-full flex items-center justify-center">
      <Overlay isActive={!!active} />
      <Navbar
        className="top-2"
        active={active}
        setActive={setActive}
        handleVideoClick={handleVideoClick}
        showVideo={showVideo}
        selectedVideoSrc={selectedVideoSrc}
        selectedTitle={selectedTitle}
        selectedGithubLink={selectedGithubLink}
        setShowVideo={setShowVideo}
        handleCloseMenu={handleCloseMenu}
      />
    </div>
  );
}


function Navbar({
  className,
  active,
  setActive,
  handleVideoClick,
  showVideo,
  selectedVideoSrc,
  selectedTitle,
  selectedGithubLink,
  setShowVideo,
  handleCloseMenu,
}: {
  className?: string;
  active: string | null;
  setActive: (item: string | null) => void;
  handleVideoClick: (videoSrc: string, title: string, githubLink: string) => void;
  showVideo: boolean;
  selectedVideoSrc: string | null;
  selectedTitle: string | null;
  selectedGithubLink: string | null;
  setShowVideo: (show: boolean) => void;
  handleCloseMenu: () => void;
}) {
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-lg">
            <HoveredLink href="/" onClick={handleCloseMenu}>Home</HoveredLink>
            <HoveredLink href="/about" onClick={handleCloseMenu}>About Me</HoveredLink>
            <HoveredLink href="/education" onClick={handleCloseMenu}>Education</HoveredLink>
            <HoveredLink href="/skills" onClick={handleCloseMenu}>Skills</HoveredLink>
            <HoveredLink href="/experience" onClick={handleCloseMenu}>Work Experience</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-lg grid grid-cols-1 md:grid-cols-2 gap-5 p-2">
            <ProductItem
              title="C# CRUD App"
              src="/CSharp CRUD App.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
              onClick={() => handleVideoClick('/CSharp_App.mp4', 'C# CRUD App', 'https://github.com/')}
            />
            <ProductItem
              title="Mario's Pizza Website"
              src="/Mario's Pizza Website.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
              onClick={() => handleVideoClick('/marios-2.mp4', "Mario's Pizza Website", 'https://github.com/')}
            />
            <ProductItem
              title="Movie & Rating App"
              src="/Movie & Rating App.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
              onClick={() => handleVideoClick('/Movie _Rating_App.mp4', 'Movie & Rating App', 'https://github.com/')}
            />
            <ProductItem
              title="Orange U Website"
              src="/Orange U.png"
              type="video/mp4"
              description="Prepare for tech interviews like never before."
              onClick={() => handleVideoClick('/orangeU-2.mp4', 'Orange U Website', 'https://github.com/')}
            />
            <ProductItem
              title="Python Contact App"
              src="/Python Contact App.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
              onClick={() => handleVideoClick('/Python_Contact_App-1.mp4', 'Python Contact App', 'https://github.com/')}
            />
            <ProductItem
              title="Python Password Generator"
              // type="video/mp4"
              src="/Python Password Generator.png"
              description="Python password generator"
              onClick={() => handleVideoClick('/python-password-generator-3.mp4', 'Python Password Generator', 'https://github.com/')}
            /> <ProductItem
              title="React Native Tic Tac Toe"
              src="/React Native Tik Tak Toe.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
              onClick={() => handleVideoClick('/tik-tak-toe-1b.mp4', 'React Native Tic Tac Toe', 'https://github.com/')}
            />
            <ProductItem
              title="React Native ToDo List App"
              src="/React Native ToDo List App.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
              onClick={() => handleVideoClick('/rn-todo-app-1.mp4', 'React Native ToDo List App', 'https://github.com/')}
            />
            <ProductItem
              title="Sticky Notes App"
              src="/Sticky Notes App.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
              onClick={() => handleVideoClick('/StickyNotesApp-1.mp4', 'Sticky Notes App', 'https://github.com/')}
            />
            <ProductItem
              title="ToDo List App"
              src="/ToDo List App.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
              onClick={() => handleVideoClick('/ToDo_List-1.mp4', 'ToDo List App', 'https://github.com/')}
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-lg">
            <HoveredLink href="https://nextjs.org" target="_blank">NextJS</HoveredLink>
            <HoveredLink href="https://ui.aceternity.com" target="_blank">Aceternity UI</HoveredLink>
            <HoveredLink href="https://tailwindcss.com">Tailwind CSS</HoveredLink>
            <HoveredLink href="https:npm.org">NPM</HoveredLink>
            <HoveredLink href="https://code.visualstudio.com/">Visual Studio Code</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-lg">
            <HoveredLink href="/contact" onClick={handleCloseMenu}>Contact Me</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      {showVideo && selectedVideoSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-black rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl p-4 max-w-screen-md w-full"
          >
            <video autoPlay loop muted disablePictureInPicture className="w-full h-auto">
              <source src={selectedVideoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="mt-4">
              <h2 className="text-xl font-bold">{selectedTitle}</h2>
              {selectedGithubLink && (
                <a href={selectedGithubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  GitHub Repository
                </a>
              )}
            </div>
            <button
              onClick={() => setShowVideo(false)}
              className="mt-4 p-2 bg-red-500 text-white rounded-md"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
