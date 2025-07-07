'use client';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function AboutSection() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Campaigns Handled', value: '1K+' },
    { label: 'Happy Clients', value: '100+' },
    { label: 'Team Members', value: '65+' },
  ];

  return (
    <section className={`bg-black py-24 ${inter.className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#fde047]"></div>
              <span className="text-[#fde047] uppercase tracking-wider text-sm">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              We Create Digital Solutions That Drive Results
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              At Witty Mavericks, we blend creativity with strategy to deliver impactful digital marketing solutions. Our team of experts is passionate about helping businesses grow through innovative online strategies and engaging content.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl font-bold text-[#fde047] mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-[#fde047] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#fde047]/90 transition-colors inline-flex items-center gap-2">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Image Section */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#fde047] rounded-2xl transform rotate-3"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-zinc-800 rounded-2xl transform -rotate-2"></div>
            
            {/* Main image container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/images/team-photo.jpg"
                alt="Our Team"
                fill
                className="object-cover mix-blend-plus-lighter"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#fde047] rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-4 border-[#fde047] rounded-full"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Innovation */}
          <div className="group relative">
            <div className="absolute inset-0 bg-[#fde047] rounded-xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
            <div className="relative bg-zinc-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#fde047] rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Innovation First</h3>
              <p className="text-gray-400">We stay ahead of digital trends to bring you cutting-edge solutions that set you apart.</p>
            </div>
          </div>

          {/* Quality */}
          <div className="group relative">
          <div className="absolute inset-0 bg-[#fde047] rounded-xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
          <div className="relative bg-zinc-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#fde047] rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15l-2 5l9-9l-9-9l2 5l-9 4l9 4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Quality Driven</h3>
              <p className="text-gray-400">Every project is executed with precision and attention to detail for maximum impact.</p>
            </div>
          </div>

          {/* Results */}
          <div className="group relative">
            <div className="absolute inset-0 bg-[#fde047] rounded-xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
            <div className="relative bg-zinc-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#fde047] rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10M18 20V4M6 20v-4"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Results Focused</h3>
              <p className="text-gray-400">We measure success by the growth and achievements of our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 