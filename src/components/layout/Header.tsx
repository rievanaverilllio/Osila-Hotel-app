'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  isScrolled?: boolean;
}

const Header = ({ isScrolled = false }: HeaderProps) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-2 md:py-3 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="home" className={`transition-colors duration-300 ${isScrolled ? 'text-amber-800' : 'text-white'}`}>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic tracking-wide font-lora">
            Oasila
        </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/reservations" 
            className={`text-base md:text-lg font-bold tracking-widest uppercase hover:opacity-80 transition-all duration-300 ${
              isScrolled ? 'text-amber-700' : 'text-white'
            }`}
          >
            RESERVATIONS
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-amber-800' : 'text-white'}`}>
          <div className="w-7 h-7 flex flex-col justify-center items-center">
            <span className={`w-full h-0.5 mb-1.5 transition-colors duration-300 ${
              isScrolled ? 'bg-amber-800' : 'bg-white'
            }`}></span>
            <span className={`w-full h-0.5 mb-1.5 transition-colors duration-300 ${
              isScrolled ? 'bg-amber-800' : 'bg-white'
            }`}></span>
            <span className={`w-full h-0.5 transition-colors duration-300 ${
              isScrolled ? 'bg-amber-800' : 'bg-white'
            }`}></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
