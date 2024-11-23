"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; // Icons for toggle button

export function NavbarDemo() {
  return (
    <div className="w-full bg-white shadow-md sticky top-0 z-50">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <div
      className={cn(
        "max-w-7xl mx-auto px-4 py-2 flex items-center justify-between lg:justify-center",
        className
      )}
    >
      {/* Logo or Branding */}
      <div className="text-lg font-bold">Dr. Amit Singh</div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </button>

      {/* Menu */}
      <div
        className={cn(
          "absolute top-full left-0 w-full lg:static lg:w-auto lg:flex lg:space-x-8 bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ease-in-out",
          menuOpen ? "block" : "hidden"
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0 text-sm">
              <HoveredLink href="/">Home</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Biography">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0 text-sm">
              <HoveredLink href="/about">Biography</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Education">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0 text-sm">
              <HoveredLink href="/education">Education</HoveredLink>
              <HoveredLink href="/researchWork">Research Work</HoveredLink>
              <HoveredLink href="/paperPoster">Paper/Poster</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Experience">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0 text-sm">
              <HoveredLink href="/professional">Professional Experience</HoveredLink>
              <HoveredLink href="/technical">Technical Experience</HoveredLink>
              <HoveredLink href="/administrative">Administrative Experience</HoveredLink>
              <HoveredLink href="/workshops">Workshops</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0 text-sm">
              <HoveredLink href="/contact">Contact</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
