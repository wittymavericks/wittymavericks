'use client';

import React from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection: FC = () => {
  return (
    <section className="relative min-h-screen h-screen">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <img
          src="/images/image.png"
          alt="Hero Background"
          className="object-cover w-full xl:h-auto h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 " />
      </div>
      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center"
      >
        <section className="max-w-3xl p-4 sm:p-6 md:p-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#fde047]"
          >
            Witty Mavericks
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-3 sm:space-y-4 md:space-y-7"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">WANNA MAKE YOUR</h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-black bg-[#fde047] px-3 sm:px-4 py-1 sm:py-2 rounded-xl inline-block transform hover:scale-105 transition-transform duration-200">
                BUSINESS
              </span>
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
               <span className="text-black bg-[#fde047] px-3 sm:px-4 py-1 sm:py-2 rounded-xl inline-block transform hover:scale-105 transition-transform duration-200">
                GROW ?
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 sm:mt-8 space-y-3 sm:space-y-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed">
              
The Better Call Growth way?

            </p>
            {/* <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              You just found yourself the perfect wingman
            </p> */}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#fde047] hover:bg-[#fde011] text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                CONTACT US
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border-2 border-white hover:bg-white text-white hover:text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                SERVICES
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </motion.div>
        </section>
      </motion.div>
    </section>
  );
};

export default HeroSection; 