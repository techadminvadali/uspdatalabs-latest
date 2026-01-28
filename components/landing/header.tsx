"use client";
import Link from "next/link";
import DM_Sans from "@/lib/fonts/dm-sans";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white w-full max-w-7xl m-auto flex justify-between items-center py-4 md:py-6 border border-gray-200 rounded-xl px-4 md:px-8 mt-5 shadow-sm relative">
      {/* Logo */}
      <h1 className={`${DM_Sans.className} text-xl md:text-2xl font-semibold text-gray-800`}>
        USP DataLabs
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6">
        <Link href="/">
          <Button variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
            Home
          </Button>
        </Link>
        <Link href="/solutions">
          <Button variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
            Solutions
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
            About
          </Button>
        </Link>
        <Link href="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
            Talk to Us
          </Button>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white border border-gray-200 rounded-xl shadow-lg lg:hidden z-50">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/" onClick={closeMobileMenu}>
              <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                Home
              </Button>
            </Link>
            <Link href="/solutions" onClick={closeMobileMenu}>
              <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                Solutions
              </Button>
            </Link>
            <Link href="/about" onClick={closeMobileMenu}>
              <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                About
              </Button>
            </Link>
            <Link href="/contact" onClick={closeMobileMenu}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium mt-2">
                Talk to Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}