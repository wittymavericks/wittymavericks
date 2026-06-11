'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { retroSound } from './RetroSound';

export default function ServicesSection() {
  const [activeIdea, setActiveIdea] = useState<'clean' | 'smart' | 'witty'>('witty');

  const cases = [
    {
      code: "CASE FILE: 01A",
      titlePrefix: "A launch becomes ",
      spanWord: "hype.",
      description: "We design launching events and rollouts to become trending internet discussions. We don't just post; we create digital queues.",
      stamp: "TOP SECRET",
      polaroidLabel: "EXHIBIT A // NEON SIGN",
      illustration: (
        <div className="w-full h-full bg-[#101012] rounded flex flex-col justify-center items-center p-3 relative overflow-hidden border border-zinc-800/80">
          <div className="absolute inset-0 bg-yellow-400/[0.02] animate-pulse"></div>
          {/* Billboard Frame */}
          <div className="w-full h-24 bg-zinc-950 border-2 border-yellow-400 rounded-lg p-2 flex flex-col justify-center items-center relative shadow-[0_0_15px_rgba(253,224,71,0.15)]">
            <span className="text-[8px] font-mono text-zinc-500 font-bold uppercase tracking-widest mb-1">MAVERICK</span>
            <span className="text-base font-black text-[#fde047] font-sans tracking-tight animate-pulse drop-shadow-[0_2px_4px_rgba(253,224,71,0.4)]">
              HYPE ACTIVE
            </span>
            <span className="text-[6px] font-mono text-red-500 font-bold mt-1">● ON THE AIR</span>
          </div>
          {/* Billboard stands */}
          <div className="w-8 h-4 border-t-2 border-x-2 border-zinc-700 mt-0.5"></div>
        </div>
      )
    },
    {
      code: "CASE FILE: 01B",
      titlePrefix: "A product becomes ",
      spanWord: "conversation.",
      description: "We position products inside jokes, commentary, and cultural trends so they're discussed organically in group chats and comments.",
      stamp: "CONFIDENTIAL",
      polaroidLabel: "EXHIBIT B // THE WIRE",
      illustration: (
        <div className="w-full h-full bg-[#101012] rounded flex flex-col justify-between p-3 relative overflow-hidden border border-zinc-800/80">
          <div className="flex justify-between items-center text-[7px] font-mono text-zinc-500">
            <span>DIAL NODE: ACTIVE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <div className="flex justify-center items-center flex-1 relative my-1">
            {/* Phone SVG */}
            <svg className="w-10 h-16 text-yellow-400/80 drop-shadow-[0_0_8px_rgba(253,224,71,0.2)]" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="2" width="14" height="20" rx="3" fill="#18181b" stroke="currentColor" strokeWidth={1.5} />
              <rect x="7" y="4" width="10" height="8" rx="1" fill="#fde047" opacity={0.8} />
              <circle cx="9" cy="14" r="0.8" fill="currentColor" />
              <circle cx="12" cy="14" r="0.8" fill="currentColor" />
              <circle cx="15" cy="14" r="0.8" fill="currentColor" />
              <circle cx="9" cy="17" r="0.8" fill="currentColor" />
              <circle cx="12" cy="17" r="0.8" fill="currentColor" />
              <circle cx="15" cy="17" r="0.8" fill="currentColor" />
              <circle cx="12" cy="20" r="0.8" fill="currentColor" />
            </svg>
            <div className="absolute -top-1 -right-2 bg-zinc-950 border border-zinc-800 text-white text-[7px] font-mono px-1.5 py-0.5 rounded shadow">
              &ldquo;Check this!&rdquo;
            </div>
            <div className="absolute -bottom-1 -left-2 bg-[#fde047] text-black text-[7px] font-mono font-bold px-1.5 py-0.5 rounded shadow">
              &ldquo;OMFG! 😂&rdquo;
            </div>
          </div>
        </div>
      )
    },
    {
      code: "CASE FILE: 01C",
      titlePrefix: "A campaign becomes ",
      spanWord: "shared.",
      description: "We craft messaging so relatable and witty that users hit that share button instantly. Built for organic loops.",
      stamp: "EVIDENCE",
      polaroidLabel: "EXHIBIT C // SEED LOG",
      illustration: (
        <div className="w-full h-full bg-[#101012] rounded flex flex-col justify-center items-center p-3 relative overflow-hidden border border-zinc-800/80">
          <div className="relative mb-1">
            <svg className="w-12 h-12 text-[#fde047] drop-shadow-[0_0_10px_rgba(253,224,71,0.2)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
            <span className="absolute -top-1 -right-2 text-xs animate-bounce">🔥</span>
            <span className="absolute -bottom-1 -right-2 text-xs animate-pulse">🔁</span>
            <span className="absolute top-4 -left-3 text-[10px]">💬</span>
          </div>
          <span className="text-[7px] font-mono text-emerald-400 font-bold tracking-widest uppercase animate-pulse">
            LOOP MULTIPLIED
          </span>
        </div>
      )
    }
  ];

  const services = [
    {
      title: "Meme Marketing",
      description: "We turn brands into viral jokes with business benefits. 💼",
      exhibit: "EXHIBIT A // CLASSIFIED STUNT",
      itemId: "ITEM-MEME-284",
      imagePath: "/soul/WhatsApp Image 2026-06-08 at 01.08.06 (1).jpeg",
      photoLabel: "EXHIBIT A // MEME TV",
      rotation: "rotate-[-2deg] group-hover:rotate-[3deg]"
    },
    {
      title: "Social Media Handling",
      description: "We keep your brand looking busy, sharp, and dangerously relevant. 📱",
      exhibit: "EXHIBIT B // BURNER NET",
      itemId: "ITEM-BURN-925",
      imagePath: "/soul/WhatsApp Image 2026-06-08 at 01.08.10 (1).jpeg",
      photoLabel: "EXHIBIT B // BURNER NET",
      rotation: "rotate-[3deg] group-hover:rotate-[-2deg]"
    },
    {
      title: "Performance Marketing",
      description: "Smart ads, sharp targeting, and results that speak loudly. 🎯",
      exhibit: "EXHIBIT C // CASH FLOW",
      itemId: "ITEM-LAUN-777",
      imagePath: "/soul/WhatsApp Image 2026-06-08 at 01.08.07.jpeg",
      photoLabel: "EXHIBIT C // CASH FLOW",
      rotation: "rotate-[-3deg] group-hover:rotate-[1deg]"
    },
    {
      title: "Music Marketing",
      description: "We make songs travel faster than rumours on the internet. 🎵",
      exhibit: "EXHIBIT D // WIRE TAP",
      itemId: "ITEM-TAPE-101",
      imagePath: "/soul/WhatsApp Image 2026-06-08 at 01.08.07 (1).jpeg",
      photoLabel: "EXHIBIT D // BINOCULARS",
      rotation: "rotate-[2deg] group-hover:rotate-[-3deg]"
    }
  ];

  const ideas = {
    clean: {
      title: "Clean Move",
      description: "Polished strategy, clean aesthetics, and seamless messaging. We make sure your brand's core values are conveyed with prestige and absolute clarity.",
      stamp: "APPROVED",
      color: "border-emerald-500 text-emerald-400 bg-emerald-400/5"
    },
    smart: {
      title: "Smart Move",
      description: "Analytical targeting, trend timing, and calculated reach. We target the specific triggers of consumer interest, making sure every post has a purpose.",
      stamp: "EVIDENCE",
      color: "border-sky-500 text-sky-400 bg-sky-400/5"
    },
    witty: {
      title: "Witty Move",
      description: "Our signature meme-first thinking. Culturally relevant humor, viral hooks, and thumb-stopping posts that get shared in group chats. The game changer.",
      stamp: "WM CONFIDENTIAL",
      color: "border-yellow-400 text-yellow-300 bg-yellow-400/5"
    }
  };

  return (
    <section className="bg-black py-24 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* WHAT WE DO SECTION */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-mono tracking-widest text-[#fde047] uppercase font-bold">
                CORE VALUE PROPOSITION
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">WHAT WE DO</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              We create marketing that feels natural to the feed and powerful for the brand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
            {cases.map((c, index) => (
              <div 
                key={index} 
                className="relative mt-8 group overflow-visible"
                onMouseEnter={() => retroSound.playTypewriter()}
              >
                {/* Folder Tab */}
                <div className="absolute top-0 left-6 -translate-y-[90%] bg-[#DFC69C] border-t-2 border-x-2 border-[#CBB085] px-4 py-1.5 rounded-t-xl text-[9px] font-mono font-black text-red-700 tracking-widest uppercase z-10 transition-transform duration-300 group-hover:-translate-y-[100%] shadow-sm">
                  {c.stamp}
                </div>

                {/* Metal paperclip */}
                <div className="absolute -top-4 right-10 z-30 pointer-events-none transform group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-12 text-zinc-650 drop-shadow-md rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                  </svg>
                </div>

                {/* Polaroid Photo sliding out from behind folder */}
                <div 
                  className="absolute top-0 right-4 w-36 h-44 bg-[#FFFEEB] border-2 border-[#E3DC8F] shadow-2xl p-2 pb-5 flex flex-col justify-between rounded pointer-events-none transition-all duration-500 ease-out z-0 transform translate-y-12 rotate-[-4deg] opacity-0 group-hover:translate-y-[-50%] group-hover:rotate-[6deg] group-hover:opacity-100"
                >
                  {/* Polaroid image frame */}
                  <div className="w-full aspect-square bg-[#101012] rounded overflow-hidden">
                    {c.illustration}
                  </div>
                  {/* Polaroid caption */}
                  <span className="text-[7px] font-mono text-zinc-500 font-bold block text-center uppercase tracking-wider mt-1.5">
                    {c.polaroidLabel}
                  </span>
                </div>

                {/* Manila Folder Base */}
                <div className="relative bg-[#DFC69C] text-zinc-950 p-8 rounded-2xl border-2 border-[#CBB085] shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-10 flex flex-col justify-between min-h-[280px]">
                  {/* Folder cardboard texture effect / ruled lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.012)_1px,transparent_1px)] bg-[size:100%_1.5rem] pointer-events-none p-4 rounded-2xl"></div>

                  <div>
                    <div className="font-mono text-[9px] text-red-800 tracking-widest font-black mb-3 uppercase border-b border-zinc-900/10 pb-1.5 flex justify-between items-center">
                      <span>{c.code}</span>
                      <span className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-red-800 animate-ping"></span>
                        EVIDENCE REGISTER
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-black leading-tight mb-4 uppercase tracking-wide font-sans">
                      {c.titlePrefix}
                      <span className="text-red-700 underline decoration-red-700/30 underline-offset-4 font-mono pl-1">
                        {c.spanWord}
                      </span>
                    </h3>
                    
                    <p className="text-zinc-800 text-xs leading-relaxed font-mono font-medium pl-3 border-l-2 border-zinc-900/20 max-w-[85%]">
                      {c.description}
                    </p>
                  </div>

                  {/* Weathered Round Stamp */}
                  <div className="absolute bottom-6 right-6 w-16 h-16 border-2 border-dashed border-red-700/20 rounded-full flex items-center justify-center rotate-12 pointer-events-none select-none">
                    <span className="text-[6px] font-mono font-black tracking-widest text-red-700/25 uppercase text-center leading-tight">
                      WITTY<br/>MAVERICKS<br/>OFFICIAL
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-mono tracking-widest text-[#fde047] uppercase font-bold">
                LEGALIZED SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">OUR SERVICES</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Elevate your brand with our meme-first digital marketing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative pt-6 overflow-visible"
                onMouseEnter={() => retroSound.playTypewriter()}
              >
                {/* Evidence Ziploc Bag Wrapper */}
                <div className="absolute inset-0 bg-white/[0.01] rounded-3xl border-2 border-dashed border-[#fde047]/10 group-hover:border-[#fde047]/30 transition-colors pointer-events-none"></div>
                
                {/* Ziploc Seal top header */}
                <div className="absolute top-6 inset-x-0 h-4 bg-zinc-950/80 border-b border-zinc-800/80 flex flex-col justify-center px-4 rounded-t-3xl z-20">
                  <div className="w-full h-1 bg-red-600 rounded-full opacity-70"></div>
                </div>

                {/* Main Content inside the bag */}
                <div className="relative bg-zinc-950/80 backdrop-blur-md p-8 pt-10 rounded-3xl border border-zinc-900 group-hover:border-yellow-400/30 transition-all flex flex-col sm:flex-row gap-6 items-center justify-between shadow-2xl">
                  
                  {/* Left: Paper Log Tag + Description */}
                  <div className="flex-1 space-y-4">
                    {/* Paper log tag */}
                    <div className="bg-white text-zinc-900 p-4 rounded-xl border-2 border-zinc-300 font-mono text-[9px] shadow-lg relative rotate-[-1deg] group-hover:rotate-0 transition-transform">
                      {/* Red log header */}
                      <div className="border-b border-red-200 pb-1.5 mb-2.5 flex justify-between items-center">
                        <span className="font-black text-red-600 uppercase tracking-widest text-[8px]">EVIDENCE LOG</span>
                        <span className="text-zinc-400 font-bold">{service.itemId}</span>
                      </div>
                      
                      <div className="space-y-1 text-zinc-700 leading-tight">
                        <p><span className="font-bold text-zinc-950">SUBJECT:</span> {service.title.toUpperCase()}</p>
                        <p><span className="font-bold text-zinc-950">ORIGIN:</span> MAVERICK LITIGATION</p>
                        <p className="text-[8px] text-zinc-500 mt-1 italic border-t border-zinc-100 pt-1">
                          &ldquo;{service.description}&rdquo;
                        </p>
                      </div>

                      {/* Barcode line */}
                      <div className="mt-3 pt-1 border-t border-zinc-200 flex justify-between items-center text-zinc-400">
                        <span className="text-[5px] tracking-widest font-black">||||| | |||| ||| |||</span>
                        <span className="text-[6px] font-bold">SECURE LOG ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Polaroid Evidence Photo */}
                  <div className="shrink-0 flex items-center justify-center relative select-none">
                    {/* Tiny metal paperclip attaching photo to the background bag */}
                    <div className="absolute -top-3 left-4 z-30 pointer-events-none transform -rotate-12 transition-transform duration-300 group-hover:scale-105">
                      <svg className="w-5 h-10 text-zinc-400/80 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                      </svg>
                    </div>

                    {/* Red marker/tape on Polaroid */}
                    <div className="absolute -top-1.5 right-2 z-20 bg-red-600/80 text-white text-[5px] font-mono font-bold tracking-widest px-1.5 py-0.5 rounded shadow-sm uppercase rotate-12 group-hover:-rotate-12 transition-transform duration-500">
                      SECURED
                    </div>

                    {/* Polaroid Frame */}
                    <div className={`w-28 bg-[#FFFEEB] border-2 border-[#E3DC8F] shadow-2xl p-1.5 pb-3 flex flex-col justify-between rounded transition-all duration-500 ease-out transform ${service.rotation} group-hover:scale-105 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]`}>
                      
                      {/* Polaroid Image Box */}
                      <div className="relative w-full aspect-square bg-zinc-950 rounded overflow-hidden border border-[#E3DC8F]/40">
                        <Image
                          src={service.imagePath}
                          alt={service.title}
                          fill
                          sizes="112px"
                          className="object-cover grayscale contrast-[1.1] sepia-[0.15] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-500 ease-out"
                        />
                        {/* Film grain / camera scanline overlay effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40"></div>
                      </div>

                      {/* Polaroid Caption */}
                      <div className="text-[5px] font-mono text-zinc-500 font-bold tracking-wider text-center uppercase mt-1.5 border-t border-zinc-900/10 pt-1 truncate">
                        {service.photoLabel}
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OUR IDEAS SECTION */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-mono tracking-widest text-[#fde047] uppercase font-bold">
                THE STRATEGIC APPROACH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">OUR IDEAS</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              People don’t wake up wanting ads. They want entertainment, emotion, curiosity. Something worth sending to a friend.
            </p>
          </div>

          {/* Tabbed Case Briefcase / Folders */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl relative">
            <div className="absolute top-4 right-4 w-4 h-4 bg-zinc-800 rounded-full shadow-inner"></div>
            
            {/* Folder Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-800 pb-4">
              {(['clean', 'smart', 'witty'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveIdea(tab);
                    retroSound.playGavel();
                  }}
                  className={`px-6 py-2.5 rounded-t-xl font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                    activeIdea === tab
                      ? 'bg-yellow-400 text-black border-t-2 border-black'
                      : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-850'
                  }`}
                >
                  {ideas[tab].title}
                </button>
              ))}
            </div>

            {/* Folder Sheet Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdea}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-6 md:p-8 relative min-h-[200px] flex flex-col justify-between"
              >
                {/* Yellow Pad Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(253,224,71,0.02)_1px,transparent_1px)] bg-[size:100%_2rem] pointer-events-none rounded-2xl"></div>

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-yellow-400/40 font-mono text-xs">CLASSIFIED BRIEF // MAVERICK IDEAS</span>
                    
                    {/* Stamp */}
                    <div className={`px-3 py-1 border-2 font-mono text-[9px] font-black tracking-widest rounded uppercase ${ideas[activeIdea].color} rotate-12`}>
                      {ideas[activeIdea].stamp}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-wide">
                    {ideas[activeIdea].title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl font-mono">
                    {ideas[activeIdea].description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-yellow-400/10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-mono text-yellow-400/60">
                  <span>DECISION: SMARTER WAY OUT</span>
                  <span>STATUS: HIGH PRIORITY</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}