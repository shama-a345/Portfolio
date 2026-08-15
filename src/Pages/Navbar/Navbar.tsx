import React, { useState } from 'react';
import { logonew } from '../../assets/images';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center px-4">
      <nav className="relative w-full max-w-5xl bg-gradient-to-r from-[#0b0f17] via-gray-600 to-[#0b0f17] text-white px-6 sm:px-8 py-2 rounded-lg flex items-center justify-between shadow-xl">
        
        {/* Logo & Brand Title */}
        <div className="flex items-center gap-2">
          <img 
            src={logonew} 
            alt="Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain hover:scale-115 transition-transform duration-500 ease-in-out cursor-pointer"
          />
          <span className="text-xl font-bold tracking-wider">SHAMA</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-md font-bold tracking-wide text-white">
          <li><a href="/" className="hover:text-green-300 transition-colors">Home</a></li>
          <li><a href="/About" className="hover:text-green-300 transition-colors">About</a></li>
          <li><a href="/Skill" className="hover:text-green-300 transition-colors">Skill</a></li>
          <li><a href="/Projects" className="hover:text-green-300 transition-colors">Projects</a></li>
          <li><a href="/Experiences" className="hover:text-green-300 transition-colors">Experiences</a></li>
          <li><a href="/Contact" className="hover:text-green-300 transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden text-white focus:outline-none p-2 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-gradient-to-r from-[#0b0f17] via-gray-700 to-[#0b0f17] rounded-lg p-6 md:hidden shadow-2xl border border-gray-700/50">
            <ul className="flex flex-col gap-4 text-center text-md font-bold tracking-wide">
              <li><a href="/" onClick={() => setIsOpen(false)} className="block py-1 hover:text-green-300 transition-colors">Home</a></li>
              <li><a href="/About" onClick={() => setIsOpen(false)} className="block py-1 hover:text-green-300 transition-colors">About</a></li>
              <li><a href="/Skill" onClick={() => setIsOpen(false)} className="block py-1 hover:text-green-300 transition-colors">Skill</a></li>
              <li><a href="/Projects" onClick={() => setIsOpen(false)} className="block py-1 hover:text-green-300 transition-colors">Projects</a></li>
              <li><a href="/Experiences" onClick={() => setIsOpen(false)} className="block py-1 hover:text-green-300 transition-colors">Experiences</a></li>
              <li><a href="/Contact" onClick={() => setIsOpen(false)} className="block py-1 hover:text-green-300 transition-colors">Contact</a></li>
            </ul>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;