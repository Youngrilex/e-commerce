import React from 'react';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full fixed z-50 font-display bg-black/90 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-5 items-center">
          <Image
                src="/akintech.png" // Update with your logo path
                alt="AkinTech Logo"
                width={40} // Set the width and height to match your design
                height={40}
                style={{ width: 'auto', height: 'auto' }} 
                priority 
              />
            <Link href="/" className="text-primary flex gap- items-center text-2xl font-bold">            
              Akin<span className='text-white'>Tech</span>
            </Link>
          </div>
          <div className="hidden text-white  md:flex space-x-12">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/shop" className="hover:text-primary">
              Shop
            </Link>
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 text-black py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Link href="/cart" className="relative">
              <FiShoppingCart size={24} />
              {/* <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span> */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
