import React, { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed z-50 font-display bg-black/90 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-5">
            <Image
              src="/akintech.png" // Update with your logo path
              alt="AkinTech Logo"
              width={40}
              height={40}
              priority
              className="h-auto w-auto" 
            />
            <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-1">
              Akin<span className="text-white">Tech</span>
            </Link>
          </div>

      

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <Link href="/store" className="hover:text-primary transition-colors duration-200">
              Shop
            </Link>
            <Link href="/products" className="hover:text-primary transition-colors duration-200">
              Products
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors duration-200">
              Contact Us
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block px-4 py-2 text-sm border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Link href="/cart" className="relative hidden sm:block">
              <FiShoppingCart size={24} />
            </Link>
          </div>

              {/* Mobile Menu Icon */}
              <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <div className="bg-accentflex flex-col mb-4 items-center mt-4 space-y-2 md:hidden">
            <Link href="/" className="hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/store" className="hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
              Shop
            </Link>
            <Link href="/products" className="hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
              Products
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
              Contact Us
            </Link>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-sm border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
