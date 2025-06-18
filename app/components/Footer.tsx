import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiEdit2 } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-16 mb-16">
      <div className="w-4/5 mx-auto">
        <div className="rounded-2xl border border-gray-700 bg-black/50">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Mobile Top Row - Logo and Social */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
              {/* Logo */}
              <span className="text-white text-xl font-semibold">KodaByte</span>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                  <FiFacebook className="text-gray-400" size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                  <FiInstagram className="text-gray-400" size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                  <FiTwitter className="text-gray-400" size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                  <FiMail className="text-gray-400" size={16} />
                </a>
              </div>
            </div>
            
            {/* Mobile Copyright */}
            <div className="flex items-center justify-center px-6 py-4">
              <span className="text-gray-500 text-sm">© 2088 KodaByte Design</span>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex">
            {/* Logo Section */}
            <div className="flex items-center justify-center px-8 py-6 border-r border-gray-700 w-1/4">
              <span className="text-white text-xl font-semibold">KodaByte</span>
            </div>
            
            {/* Content Section */}
            <div className="flex-1 flex flex-col">
              {/* Top Row - Navigation and Email */}
              <div className="flex border-b border-gray-700">
                {/* Navigation Links */}
                <div className="flex-1 flex items-center justify-center space-x-6 px-8 py-6 border-r border-gray-700">
                  {["Projects", "About", "Team", "Contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 font-medium hover:text-white transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
                
                {/* Email */}
                <div className="flex-1 flex items-center justify-center px-8 py-6">
                  <span className="text-gray-300 font-medium">hello@kodabyte.io</span>
                </div>
              </div>
              
              {/* Bottom Row - Blog, Social, Copyright */}
              <div className="flex">
                {/* Blog */}
                <div className="flex-1 flex items-center justify-center px-8 py-6 border-r border-gray-700">
                  <FiEdit2 className="text-gray-400 mr-2" size={18} />
                  <span className="text-gray-300 font-medium">Blog</span>
                </div>
                
                {/* Social Icons */}
                <div className="flex-1 flex items-center justify-center gap-4 px-8 py-6 border-r border-gray-700">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                    <FiFacebook className="text-gray-400" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                    <FiInstagram className="text-gray-400" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                    <FiTwitter className="text-gray-400" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                    <FiMail className="text-gray-400" size={18} />
                  </a>
                </div>
                
                {/* Copyright */}
                <div className="flex-1 flex items-center justify-center px-8 py-6">
                  <span className="text-gray-500 text-sm">© 2088 KodaByte Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 