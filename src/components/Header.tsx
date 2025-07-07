'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-[#fde047] transition-colors duration-200 text-sm font-medium"
  >
    {children}
  </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${inter.className}
        ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <nav className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="text-white font-bold tracking-tight transition-all duration-300 text-xl sm:text-2xl shrink-0">
            {/* WITTY<span className="text-[#fde047]">MAVERICKS</span> */}
           <img src="/images/logo.png" alt="logo" className='w-30 h-14'/>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/services">SERVICES</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>
            <NavLink href="/about">ABOUT US</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span
                className={`absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-16 sm:top-20 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium">
            <Link
              href="/"
              className="text-gray-300 hover:text-[#fde047] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-[#fde047] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-[#fde047] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-[#fde047] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}