"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-lg">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/about">About Me</HoveredLink>
            <HoveredLink href="/education">Education</HoveredLink>
            <HoveredLink href="/skills">Skills</HoveredLink>
            <HoveredLink href="/experience">Work Experience</HoveredLink>
            <HoveredLink href="/contact">Contact Me</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          {/* <div className="  text-sm grid grid-cols-2 gap-5 p-2"> */}
          <div className="text-lg grid grid-cols-1 md:grid-cols-2 gap-5 p-2">
          {/* <div className="  text-sm grid grid-cols-2 gap-10 p-4"> */}
            <ProductItem
              title="Orange U"
              href="https://algochurn.com"
              videoSrc="/orangeU-2.mp4"
              // src="https://assets.aceternity.com/demos/algochurn.webp"
              type="video/mp4"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Password Generator"
              href="https://tailwindmasterkit.com"
              videoSrc="/python-password-generator-3.mp4"
              type="video/mp4"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="StickyNotesApp"
              href="https://gomoonbeam.com"
              videoSrc="/StickyNotesApp-1.mp4"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Links">
          <div className="flex flex-col space-y-4 text-lg">
            <HoveredLink href="https://nextjs.org" target="_blank">NextJS</HoveredLink>
            <HoveredLink href="https://ui.aceternity.com" target="_blank">Aceternity UI</HoveredLink>
            <HoveredLink href="https://tailwindcss.com">Tailwind CSS</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
