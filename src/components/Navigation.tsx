"use client"; // We need hooks, so this must be a Client Component

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

export default function Navigation() {
  const pathname = usePathname(); // Get current URL path
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contacts", label: "Contacts" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          My Blog
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`no-underline transition ${pathname === link.href ? "text-white font-semibold" : "text-white/70 hover:text-white"}`}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`no-underline text-lg transition ${pathname === link.href ? "text-white font-semibold" : "text-white/70 hover:text-white"}`}
              onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
