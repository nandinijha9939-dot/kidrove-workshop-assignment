import React, { useState } from 'react';
import { Menu, X, User, Search } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Banner - Kidrove Style */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold">
            KIDROVE SUMMER 2026 — Now Open! List your summer camp, kids activity. 
            Limited slots — early partners get priority placement.
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">Kidrove</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium transition">Find Activities</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium transition">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium transition">Kidrove Go</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium transition">FAQ</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium transition">Get In Touch</a>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              <User className="w-4 h-4" />
              Login
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Find Activities</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Kidrove Go</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">FAQ</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Get In Touch</a>
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                <User className="w-4 h-4" />
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;