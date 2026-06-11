'use client';

import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-foreground font-sans">
      <Header />
      <div className="pt-24">
        
        {/* Contact Page Hero */}
        <section className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-mono tracking-widest text-[#fde047] uppercase font-bold block mb-3">
                SECURE COMMUNICATION CHANNEL
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase">
                Let&apos;s Start a <span className="text-[#fde047]">Conversation</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Have an attention crisis or a campaign that needs scaling? We&apos;d love to represent you. Let&apos;s discuss how to win the feed.
              </p>
            </div>
          </div>
        </section>

        {/* Central Graphic Billboard */}
        <section className="bg-black py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#fde047] rounded-2xl transform rotate-1 shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-zinc-900 rounded-2xl transform -rotate-1"></div>
              
              {/* Main image container */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border-4 border-zinc-800 shadow-2xl bg-zinc-950">
                <Image
                  src="/images/call-saul.jpg"
                  alt="Better Call Witty Mavericks"
                  fill
                  className="object-cover grayscale brightness-125 contrast-125 hover:grayscale-0 transition-all duration-700"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-yellow-400 bg-black/60 px-2 py-1 rounded border border-yellow-400/20">
                    BILLBOARD // LOCATION JHANSI, UP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection />

        {/* Office Locations */}
        <section className="bg-[#08080a] py-20 border-t border-zinc-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Main Office */}
              <div className="group relative">
                <div className="absolute inset-0 bg-[#fde047] rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                <div className="relative bg-zinc-950 border border-zinc-900 p-8 rounded-2xl text-white">
                  <span className="text-[10px] font-mono text-yellow-400 font-bold block mb-2">HQ LOCATION</span>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase">Main Office</h3>
                  <div className="space-y-3 text-gray-400 text-sm font-mono">
                    <p>123 Civil Lines</p>
                    <p>Jhansi 284001</p>
                    <p>Uttar Pradesh, India</p>
                    <div className="pt-4 border-t border-zinc-800/50">
                      <p className="text-[#fde047] font-bold">OPERATING HOURS:</p>
                      <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Center */}
              <div className="group relative">
                <div className="absolute inset-0 bg-[#fde047] rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
                <div className="relative bg-zinc-950 border border-zinc-900 p-8 rounded-2xl text-white">
                  <span className="text-[10px] font-mono text-yellow-400 font-bold block mb-2">SUPPORT DIRECTORY</span>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase">Support Center</h3>
                  <div className="space-y-3 text-gray-400 text-sm font-mono">
                    <p>Email: wittymavericks@gmail.com</p>
                    <p>Phone: +91 9250882554</p>
                    <p>Toll-free: 1800-MAVERICKS</p>
                    <div className="pt-4 border-t border-zinc-800/50">
                      <p className="text-[#fde047] font-bold">SUPPORT HOURS:</p>
                      <p>24/7 Secure Online Monitoring</p>
                      <p>Phone Inbound: Mon-Fri, 10:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}