'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DockNav = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlDock = () => {
      const currentScrollY = window.scrollY;
      
      // Show dock when:
      // 1. Scrolling up
      // 2. At the top of the page
      // 3. At the bottom of the page
      if (currentScrollY < lastScrollY || // Scrolling up
          currentScrollY < 50 || // Near top
          currentScrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) { // Near bottom
        setIsVisible(true);
      } else if (currentScrollY > 50 && currentScrollY > lastScrollY) { // Scrolling down and not at top
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlDock);
    return () => window.removeEventListener('scroll', controlDock);
  }, [lastScrollY]);

  const dockVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const NavItem = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
    const isActive = pathname === href;
    
    return (
      <Link href={href} className="flex flex-col items-center space-y-1.5 group relative">
        <motion.div 
          className="relative"
          whileHover="hover"
          variants={iconVariants}
        >
          <div className={`p-2 rounded-xl relative ${isActive ? 'text-[#f0ff42]' : 'text-gray-400 group-hover:text-gray-300'}`}>
            <div className="relative">
              {/* Background icon (always visible) */}
              <div className="text-gray-600">
                {icon}
              </div>
              
              {/* Animated fill icon */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div 
                    className="absolute inset-0 text-[#f0ff42] overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                      maskImage: 'linear-gradient(to right, black, black)',
                      WebkitMaskImage: 'linear-gradient(to right, black, black)'
                    }}
                  >
                    {icon}
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ 
                        opacity: [0.5, 0.8, 0.5],
                        filter: [
                          'drop-shadow(0 0 2px #f0ff42)',
                          'drop-shadow(0 0 8px #f0ff42)',
                          'drop-shadow(0 0 2px #f0ff42)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
        <span className={`text-xs font-medium opacity-90 ${isActive ? 'text-[#f0ff42]' : 'text-gray-400 group-hover:text-gray-300'}`}>
          {label}
        </span>
      </Link>
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-4 left-4 right-4 md:hidden z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dockVariants}
        >
          <nav className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg mx-auto max-w-sm">
            <div className="flex justify-around items-center p-4">
              <NavItem 
                href="/"
                label="Home"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                }
              />
              
              <NavItem 
                href="/services"
                label="Services"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                }
              />
              
              <NavItem 
                href="/about"
                label="About"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              
              <NavItem 
                href="/contact"
                label="Contact"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DockNav; 