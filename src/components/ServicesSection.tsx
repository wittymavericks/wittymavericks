'use client';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ServicesSection() {
  const services = [
    {
      title: "Meme Marketing",
      description: "Viral meme campaigns that resonate with your audience and drive engagement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      )
    },
    {
      title: "Social Media Visibility",
      description: "Strategic social media management to boost your brand's online presence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19.2 12c0-1.8-1.5-3.2-3.2-3.2-1.8 0-3 1.2-4 2.7-1-1.5-2.2-2.7-4-2.7-1.7 0-3.2 1.4-3.2 3.2s1.5 3.2 3.2 3.2c1.8 0 3-1.2 4-2.7 1 1.5 2.2 2.7 4 2.7 1.7 0 3.2-1.4 3.2-3.2z" />
        </svg>
      )
    },
    {
      title: "Brand Presence",
      description: "Build a strong and memorable brand identity across all platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          <line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
      )
    },
    {
      title: "Personalized Campaign",
      description: "Tailored marketing campaigns that align with your business goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  ];

  return (
    <section className={`bg-black py-24 ${inter.className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#fde047]"></div>
            <span className="text-[#fde047] uppercase tracking-wider text-sm">Our Services</span>
            <div className="w-8 h-[1px] bg-[#fde047]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">What We Offer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elevate your brand with our comprehensive digital marketing solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Background layers */}
              <div className="absolute inset-0 bg-[#fde047] rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl transform -rotate-1 group-hover:rotate-1 transition-transform"></div>
              
              {/* Content */}
              <div className="relative bg-zinc-900 p-8 rounded-2xl transform hover:-translate-y-1 transition-all">
                <div className="mb-6 text-[#fde047]">{service.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-[#fde047] rounded-full opacity-50"></div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-3 h-3 border-2 border-[#fde047] rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-[#fde047] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#fde047]/90 transition-colors inline-flex items-center gap-2">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 