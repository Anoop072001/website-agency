"use client";
import { FiMenu, FiEdit2, FiCalendar, FiX } from "react-icons/fi";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full mt-8 mb-12 sticky top-0 z-50 flex flex-col items-center justify-center">
      <div className="w-4/5 rounded-2xl border border-gray-700 mt-4 backdrop-blur bg-black/70">
        <div className="flex md:block">
          {/* Mobile Layout - Only Logo and Hamburger */}
          <div className="flex md:hidden items-center justify-between w-full px-6 py-2">
            {/* Logo */}
            <span className="text-gray-300 font-semibold text-lg">KodaByte</span>
            
            {/* Hamburger */}
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FiX className="text-gray-200" size={20} />
              ) : (
                <FiMenu className="text-gray-200" size={20} />
              )}
            </button>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex">
            {/* First Column - Logo */}
            <div className="flex items-center justify-center px-6 py-2 border-r border-gray-700" style={{minWidth: '180px'}}>
              <span className="text-gray-300 font-semibold text-lg">KodaByte</span>
            </div>
            
            {/* Second Column - Content */}
            <div className="flex-1 flex flex-col">
              {/* First Row - Navigation Links */}
              <div className="flex items-center justify-center px-8 py-2 border-b border-gray-700">
                <div className="flex space-x-8">
                  {["Projects", "About", "Team", "Contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-200 font-medium text-base hover:text-white transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Second Row - Blog and Get in Touch */}
              <div className="flex">
                {/* Blog */}
                <div className="flex-1 flex items-center justify-center px-8 py-2 border-r border-gray-700">
                  <FiEdit2 className="text-gray-400 mr-2" size={16} />
                  <span className="text-gray-300 font-medium text-base">Blog</span>
                </div>
                
                {/* Get in Touch */}
                <div className="flex-1 flex items-center justify-center px-8 py-2">
                  <FiCalendar className="text-gray-400 mr-2" size={16} />
                  <span className="text-gray-300 font-medium text-base">Get in touch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 px-8 py-4 border-b border-gray-700">
              {["Projects", "About", "Team", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-200 font-medium text-base hover:text-white transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
            
            {/* Mobile Blog and Get in Touch */}
            <div className="flex flex-col">
              {/* Blog */}
              <div className="flex items-center px-8 py-3 border-b border-gray-700">
                <FiEdit2 className="text-gray-400 mr-2" size={16} />
                <span className="text-gray-300 font-medium text-base">Blog</span>
              </div>
              
              {/* Get in Touch */}
              <div className="flex items-center px-8 py-3">
                <FiCalendar className="text-gray-400 mr-2" size={16} />
                <span className="text-gray-300 font-medium text-base">Get in touch</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar; 