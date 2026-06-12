'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { retroSound } from './RetroSound';

export default function AboutSection() {
  const [retainedMembers, setRetainedMembers] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const priorityCampaigns = [
    {
      title: "Tu Yaa Main",
      refCode: "EXHIBIT C-01 / TYM",
      category: "Bollywood Movie Campaign",
      image: "/images/Tu Yaa Main.jpg",
      desc: "Comprehensive marketing and campaign strategy for the Bollywood film 'Tu Yaa Main', driving organic social media hype, trailer discussions, and character-reveal buzz.",
      links: [
        { label: "Reference Link 1 (Instagram Reel)", url: "https://www.instagram.com/reel/DXE7CmpCZyt/" },
        { label: "Reference Link 2 (Instagram Reel)", url: "https://www.instagram.com/reel/DXHkI4NiWW6/" },
        { label: "Reference Link 3 (Instagram Reel)", url: "https://www.instagram.com/reel/DXM4DJRTMRA/" }
      ]
    },
    {
      title: "Avatar: Fire and Ash",
      refCode: "EXHIBIT C-02 / AVTR",
      category: "Hollywood Movie Campaign",
      image: "/images/Avatar.jpeg",
      desc: "Hype generation and massive attention capture for James Cameron's blockbuster sequel 'Avatar: Fire and Ash', driving global fan theories, trailer drops, and cinematic discussions.",
      links: [
        { label: "Reference Link 1 (Instagram Reel)", url: "https://www.instagram.com/reel/DSeNRBHiGwb/" },
        { label: "Reference Link 2 (Instagram Reel)", url: "https://www.instagram.com/reel/DXa0IXnEvpR/" },
        { label: "Reference Link 3 (Instagram Reel)", url: "https://www.instagram.com/reel/DSpsDL7j0GB/" }
      ]
    },
    {
      title: "Bold Care",
      refCode: "EXHIBIT C-03 / BOLD",
      category: "Men's Wellness Brand",
      image: "/images/Boldcare.jpg",
      desc: "High-impact social campaign for the D2C wellness brand 'Bold Care', driving massive brand awareness, product seeding, and viral marketing featuring top celebrity stars.",
      links: [
        { label: "Reference Link 1 (Instagram Reel)", url: "https://www.instagram.com/reel/DOJOJwCgTdK/" },
        { label: "Reference Link 2 (Instagram Reel)", url: "https://www.instagram.com/reel/DOIgjFeEZon/" },
        { label: "Reference Link 3 (Instagram Post)", url: "https://www.instagram.com/p/DOIz3prDUzJ/" }
      ]
    },
    {
      title: "HAQ",
      refCode: "EXHIBIT C-04 / HAQ",
      category: "Bollywood Movie Campaign",
      image: "/images/haq.jpg",
      desc: "Organic marketing and conversation seeding for the courtroom drama movie 'Haq', sparking national social debates around legal rights and building massive trailer engagement.",
      links: [
        { label: "Reference Link 1 (Instagram Reel)", url: "https://www.instagram.com/reel/DQhHi8Jk2qT/" },
        { label: "Reference Link 2 (Instagram Reel)", url: "https://www.instagram.com/reel/DQZPlTSkvph/" },
        { label: "Reference Link 3 (Instagram Reel)", url: "https://www.instagram.com/reel/DO88pRJjBRB/" }
      ]
    },
    {
      title: "Lakmé",
      refCode: "EXHIBIT C-05 / LKME",
      category: "Cosmetics & Beauty Brand",
      image: "/images/Lakme.jpeg",
      desc: "Creative social positioning and luxury brand campaigns for 'Lakmé', leveraging top beauty creators and premium aesthetics to showcase cosmetic line launches and runway events.",
      links: [
        { label: "Reference Link 1 (Instagram Post)", url: "https://www.instagram.com/p/DXeVMXijDW1yQQnvHGxmVM7teAm97MWrukRKXU0/" },
        { label: "Reference Link 2 (Instagram Post)", url: "https://www.instagram.com/p/DXgT4c0jAYQeD_sEy4aSG6gC_PEQ5m4rgf3XFw0/" },
        { label: "Reference Link 3 (Instagram Post)", url: "https://www.instagram.com/p/DXgY690jdmP/" }
      ]
    }
  ];

  const toggleRetained = (idx: number) => {
    retroSound.playGavel();
    setRetainedMembers(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const toggleFlip = (idx: number) => {
    retroSound.playTVStaticClick();
    setFlippedCards(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const team = [
    {
      name: "Samarth Pratap",
      role: "CEO / Founder",
      bio: "No matter the problem, he already knows the smarter way out.",
      email: "samarth@wittymavericks.com",
      image: "/images/saul.jpg",
      stamp: "FOUNDER"
    },
    {
      name: "Shruti Sharma",
      role: "Sr Campaign Manager",
      bio: "She keeps every campaign on track with sharp planning and smooth execution.",
      email: "shruti@wittymavericks.com",
      image: "/images/kim.jpg",
      stamp: "MANAGER"
    },
    {
      name: "Ayush Bisht",
      role: "Senior Content Planner",
      bio: "He always has fresh ideas that make content stand out and connect.",
      email: "ayush@wittymavericks.com",
      image: "/images/mike.jpg",
      stamp: "PLANNER"
    },
    {
      name: "Raghunath Dewasi",
      role: "Senior Campaign Strategist",
      bio: "He knows how to turn every challenge into a winning campaign strategy.",
      email: "raghunath@wittymavericks.com",
      image: "/images/lalo.jpg",
      stamp: "STRATEGIST"
    },

    {
      name: "Anumapa Yadav",
      role: "Content Manager",
      bio: "She manages content with creativity, clarity, and perfect coordination.",
      email: "anumapa@wittymavericks.com",
      image: "/images/jane.jpg",
      stamp: "CONTENT"
    },
    {
      name: "Yashika",
      role: "Junior Content Manager",
      bio: "She brings structure, detail, and smart coordination to every piece of content.",
      email: "yashika@wittymavericks.com",
      image: "/images/lydia.png",
      stamp: "LOGISTICS"
    }
  ];
  const [status, setStatus] = useState<'unverified' | 'checking' | 'verified'>('unverified');
  const [displayValues, setDisplayValues] = useState<number[]>([0, 0, 0, 0]);
  const animationRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const statsConfig = [
    { label: 'Campaigns Handled', target: 2, suffix: 'K+' },
    { label: 'Attention Reach', target: 200, suffix: 'M+' },
    { label: 'Active Mavericks', target: 80, suffix: '+' },
    { label: 'Viral Moments', target: 500, suffix: '+' }
  ];

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleCheckNumbers = () => {
    if (status === 'checking') return;

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    setStatus('checking');
    retroSound.playTVStaticClick();

    const startTime = performance.now();
    const duration = 4000;

    intervalRef.current = setInterval(() => {
      retroSound.playTypewriter();
    }, 80);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);

      const nextValues = statsConfig.map((stat) => {
        return Math.floor(easeProgress * stat.target);
      });

      setDisplayValues(nextValues);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setStatus('verified');
        retroSound.playGavel();
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <section className="bg-black py-24 border-t border-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* WHO WE ARE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-mono tracking-widest text-[#fde047] uppercase font-bold">
                THE MAVERICKS DOSSIER
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              WHO WE ARE
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed font-sans mb-6">
              We’re a team shaped by the internet.
            </p>
            <p className="text-gray-400 leading-relaxed text-base max-w-2xl mb-8">
              We understand trends, humour, audience behaviour, and timing. We know when to move fast, when to stay sharp, and when to make some noise. Let’s just say… <span className="text-[#fde047] font-semibold">we know the game.</span>
            </p>

            {/* Verification Console */}
            <div className="mb-8 p-4 bg-zinc-900/30 border border-zinc-800/80 rounded-2xl backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  {status === 'unverified' && (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </>
                  )}
                  {status === 'checking' && (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                    </>
                  )}
                  {status === 'verified' && (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </>
                  )}
                </div>

                <div className="font-mono text-xs text-zinc-400 tracking-wider">
                  {status === 'unverified' && (
                    <span>DOSSIER STATUS: <span className="text-red-400 font-bold">UNVERIFIED</span></span>
                  )}
                  {status === 'checking' && (
                    <span className="text-yellow-400 animate-pulse font-bold">DECRYPTING DOSSIER DATA...</span>
                  )}
                  {status === 'verified' && (
                    <span>DOSSIER STATUS: <span className="text-emerald-400 font-bold">SECURED & VERIFIED</span></span>
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCheckNumbers}
                disabled={status === 'checking'}
                className={`px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 ${status === 'checking'
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700/50'
                  : status === 'verified'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                    : 'bg-[#fde047] text-black hover:bg-yellow-300 shadow-[0_0_15px_rgba(253,224,71,0.2)] border border-yellow-400/40'
                  }`}
              >
                {status === 'unverified' && 'CHECK NUMBERS'}
                {status === 'checking' && 'DECRYPTING...'}
                {status === 'verified' && 'RE-RUN AUDIT'}
              </motion.button>
            </div>

            {/* Stats list */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-zinc-800">
              {statsConfig.map((stat, idx) => (
                <div key={idx} className="space-y-1 relative group">
                  {status === 'verified' && (
                    <div className="absolute -inset-2 bg-emerald-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm" />
                  )}
                  <div className={`text-3xl font-black font-mono transition-all duration-500 flex items-baseline ${status === 'unverified'
                    ? 'text-zinc-600 blur-[2px]'
                    : status === 'checking'
                      ? 'text-yellow-400/95'
                      : 'text-[#fde047]'
                    }`}>
                    <span>{status === 'unverified' ? '0' : displayValues[idx]}</span>
                    <span className={`text-lg font-bold ml-0.5 transition-colors ${status === 'unverified' ? 'text-zinc-700' : 'text-yellow-400'
                      }`}>
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold transition-colors group-hover:text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image visual block representing the office / team */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-yellow-400/10 rounded-2xl blur-md pointer-events-none"></div>
            <div className="relative border-4 border-zinc-800 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/team-photo.jpg"
                alt="Witty Mavericks Team Photo"
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="text-[10px] font-mono text-yellow-400 bg-black/60 px-2 py-1 rounded border border-yellow-400/20">
                  EXHIBIT D-4: MA MAVERICK TEAM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* OUR WORK */}
        <div className="p-8 md:p-12 bg-zinc-950 border border-zinc-900 rounded-3xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 blur-3xl rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono text-[#fde047] uppercase font-bold tracking-widest block">PROVEN RESULTS</span>
              <h3 className="text-3xl font-bold text-white uppercase">OUR WORK</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                From entertainment to beauty, tech to sports, we’ve helped brands win attention where it matters most. Our campaigns are built for reach, recall, and reactions.
              </p>
            </div>
            <div className="md:col-span-4 text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-yellow-400/40 pl-4 md:pl-0 md:pr-4 py-2">
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-wider">The Maverick Creed</p>
              <p className="text-white text-lg font-bold font-sans mt-1">
                &ldquo;Because numbers are nice. But being remembered is nicer.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* CAMPAIGN REFERENCES SECTION */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#fde047] uppercase font-bold block mb-3">
              ACTIVE CASE LOGS
            </span>
            <h2 className="text-4xl font-bold text-white uppercase">Campaign Case Studies</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
              Review our priority campaigns. Click any card to flip it and inspect evidence files and social references.
            </p>
          </div>

          {/* 3D Flipping Polaroid Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {priorityCampaigns.map((camp, idx) => {
              const isFlipped = flippedCards.includes(idx);
              return (
                <div
                  key={idx}
                  className="w-full perspective-1000 h-[420px]"
                >
                  <div
                    onClick={() => toggleFlip(idx)}
                    className={`relative w-full h-full duration-700 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''
                      }`}
                  >
                    {/* FRONT SIDE (Polaroid Photo Card) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-[#FFFEEB] p-4 rounded-xl border-2 border-[#E3DC8F] shadow-xl flex flex-col justify-between select-none">
                      {/* Notepad Ruled Lines Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:100%_1.5rem] pointer-events-none p-4 pt-12"></div>

                      {/* Paper clip detail */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none transform -rotate-12 transition-transform duration-300">
                        <svg className="w-5 h-10 text-zinc-650 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                        </svg>
                      </div>

                      {/* Red Stamp tape at top right */}
                      <div className="absolute top-2 right-2 z-10 bg-red-700/80 text-white text-[6px] font-mono font-bold tracking-widest px-1.5 py-0.5 rounded shadow-sm uppercase rotate-12">
                        EXHIBIT {String.fromCharCode(65 + idx)}
                      </div>

                      {/* Polaroid Image */}
                      <div className={`relative w-full h-[75%] rounded-lg overflow-hidden border border-[#E3DC8F]/40 mt-2 ${camp.image.toLowerCase().includes('lakme') ? 'bg-white p-2' : 'bg-zinc-950'
                        }`}>
                        <Image
                          src={camp.image}
                          alt={camp.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 20vw"
                          className={`transition-all duration-500 ease-out ${
                            camp.image.toLowerCase().includes('lakme') || camp.image.toLowerCase().includes('tu yaa main')
                              ? 'object-contain'
                              : 'object-cover'
                          }`}
                        />
                        {/* Film grain effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] opacity-40 pointer-events-none"></div>
                      </div>

                      {/* Card Caption */}
                      <div className="text-center pb-1">
                        <h3 className="font-sans font-black text-black text-sm tracking-wide uppercase truncate">
                          {camp.title}
                        </h3>
                        <p className="font-mono text-[8px] text-[#b91c1c] font-bold uppercase tracking-widest mt-0.5">
                          {camp.category}
                        </p>
                      </div>
                    </div>

                    {/* BACK SIDE (Typewriter Index Card Details) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-[#FFFDF0] p-5 rounded-xl border-2 border-[#DFC69C] shadow-xl flex flex-col justify-between rotate-y-180 select-none">
                      {/* Notepad Ruled Lines Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:100%_1.5rem] pointer-events-none p-4 pt-12"></div>

                      {/* Back Card Content */}
                      <div>
                        {/* Header */}
                        <div className="border-b border-zinc-900/10 pb-2 mb-3 flex justify-between items-start">
                          <div>
                            <span className="text-[7px] font-mono font-bold tracking-widest text-[#b91c1c] uppercase block">
                              {camp.category}
                            </span>
                            <h4 className="font-sans font-black text-black text-xs uppercase mt-0.5">
                              {camp.title}
                            </h4>
                          </div>
                          <span className="text-[7px] font-mono bg-zinc-900/5 border border-zinc-900/10 px-1 py-0.5 rounded text-zinc-500 font-bold">
                            {camp.refCode.split(' ')[2]}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-800 font-sans text-[10px] leading-relaxed pl-1.5 border-l-2 border-zinc-900/20 font-mono italic max-h-[110px] overflow-y-auto scrollbar-thin">
                          &ldquo;{camp.desc}&rdquo;
                        </p>
                      </div>

                      {/* References / Links */}
                      <div className="space-y-1.5 mt-2">
                        <span className="text-[7px] font-mono font-bold text-zinc-400 tracking-wider uppercase block">
                          CASE EVIDENCE
                        </span>
                        <div className="space-y-1.5">
                          {camp.links.map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                e.stopPropagation();
                                retroSound.playTypewriter();
                              }}
                              className="flex items-center justify-between p-2 bg-zinc-950/5 hover:bg-[#b91c1c]/10 border border-zinc-900/15 hover:border-[#b91c1c]/40 rounded-lg transition duration-200 group text-[8px] font-mono font-bold text-zinc-800"
                            >
                              <span className="truncate max-w-[85%]">{link.label}</span>
                              <svg className="w-2.5 h-2.5 text-zinc-400 group-hover:text-[#b91c1c] flex-shrink-0 ml-1 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="pt-2 border-t border-zinc-900/5 flex justify-between items-center text-[7px] font-mono text-zinc-400">
                        <span>CONFIDENTIAL RECORD</span>
                        <span>FLIP BACK ↺</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TRUSTED BRANDS LOGO MARQUEE */}
        <div className="mb-24 py-10 bg-zinc-950/30 border-y border-zinc-900/80 rounded-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono text-[#fde047] uppercase font-bold tracking-widest block mb-2">
              OUR TRUSTED PORTFOLIO
            </span>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">CREATIVE CAMPAIGN NETWORK</h3>
          </div>

          <div className="w-full overflow-hidden relative py-6">
            {/* Gradient Overlays for smooth blend-in and blend-out at the edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-infinite-scroll flex gap-20 items-center">
              {/* BRAND LOGOS: 1st Set */}
              {[
                // Adobe
                <div key="adobe" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/adobe.png"
                    alt="Adobe Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Truecaller
                <div key="truecaller" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/truecaller.png"
                    alt="Truecaller Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // The Boys
                <div key="boys" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/The boys.png"
                    alt="The Boys Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Bhooth Bangla
                <div key="bhooth" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/bhooth_bangla_logo.png"
                    alt="Bhooth Bangla Logo"
                    className="h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // T20 World Cup
                <div key="t20" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/icc t20 world cup.jpg"
                    alt="T20 World Cup Logo"
                    className="h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Ramayana
                <div key="ramayana" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/Ramayana logo.jpg"
                    alt="Ramayana Logo"
                    className="h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Priyanka Chopra
                <div key="priyanka" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <span className="font-serif italic font-light text-xs tracking-wider text-zinc-500 group-hover:text-pink-400 transition-colors">
                    Priyanka Chopra Jonas
                  </span>
                </div>,

                // Bullet
                <div key="bullet" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/Bullet app logo.jpg"
                    alt="Bullet Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Tu Yaa Main
                <div key="tym" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/tu ya main logo .png"
                    alt="Tu Yaa Main Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Avatar
                <div key="avatar" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <span className="font-sans font-light text-xs tracking-[0.25em] text-zinc-500 group-hover:text-cyan-400 transition-colors">
                    AVATAR
                  </span>
                </div>,

                // Bold Care
                <div key="boldcare" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/Boldcare logo.png"
                    alt="Bold Care Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // HAQ
                <div key="haq" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/Haq logo.jpg"
                    alt="HAQ Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Lakmé
                <div key="lakme" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/Lakme logo.png"
                    alt="Lakmé Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ].map((logoHtml, lIdx) => (
                <div key={`logo-set1-${lIdx}`} className="flex-shrink-0">
                  {logoHtml}
                </div>
              ))}

              {/* BRAND LOGOS: 2nd Duplicate Set for Infinite Scroll */}
              {[
                // Adobe
                <div key="dup-adobe" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/adobe.png"
                    alt="Adobe Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Truecaller
                <div key="dup-truecaller" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/truecaller.png"
                    alt="Truecaller Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // The Boys
                <div key="dup-boys" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/The boys.png"
                    alt="The Boys Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Bhooth Bangla
                <div key="dup-bhooth" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/bhooth_bangla_logo.png"
                    alt="Bhooth Bangla Logo"
                    className="h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // T20 World Cup
                <div key="dup-t20" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/icc t20 world cup.jpg"
                    alt="T20 World Cup Logo"
                    className="h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Ramayana
                <div key="dup-ramayana" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/Ramayana logo.jpg"
                    alt="Ramayana Logo"
                    className="h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Priyanka Chopra
                <div key="dup-priyanka" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <span className="font-serif italic font-light text-xs tracking-wider text-zinc-500 group-hover:text-pink-400 transition-colors">
                    Priyanka Chopra Jonas
                  </span>
                </div>,

                // Bullet
                <div key="dup-bullet" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/Bullet app logo.jpg"
                    alt="Bullet Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Tu Yaa Main
                <div key="dup-tym" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/tu ya main logo .png"
                    alt="Tu Yaa Main Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Avatar
                <div key="dup-avatar" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <span className="font-sans font-light text-xs tracking-[0.25em] text-zinc-500 group-hover:text-cyan-400 transition-colors">
                    AVATAR
                  </span>
                </div>,

                // Bold Care
                <div key="dup-boldcare" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/Boldcare logo.png"
                    alt="Bold Care Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // HAQ
                <div key="dup-haq" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/Haq logo.jpg"
                    alt="HAQ Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>,

                // Lakmé
                <div key="dup-lakme" className="group flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/Lakme logo.png"
                    alt="Lakmé Logo"
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ].map((logoHtml, lIdx) => (
                <div key={`logo-set2-${lIdx}`} className="flex-shrink-0">
                  {logoHtml}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEAM MEMBERS SECTION */}
        <div>
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-widest text-[#fde047] uppercase font-bold block mb-3">
              LEGAL COUNSEL OF ATTENTION
            </span>
            <h2 className="text-4xl font-bold text-white">MEET THE MAVERICKS</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
              We operate under the code of viral law. These are the experts in charge of winning your case.
            </p>
          </div>

          {/* Business card grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, rotate: idx % 2 === 0 ? 1 : -1 }}
                onClick={() => toggleRetained(idx)}
                className="bg-[#FFFEEB] text-zinc-900 p-6 rounded-lg shadow-xl relative overflow-hidden border-2 border-[#E3DC8F] flex flex-col justify-between min-h-[365px] cursor-pointer hover:shadow-2xl transition-shadow group"
                title="Click to hire this Maverick!"
              >
                {/* Yellow legal pad rules lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:100%_1.5rem] pointer-events-none p-4 pt-12"></div>

                {/* Vintage Card Border */}
                <div className="absolute inset-3 border border-zinc-900/10 pointer-events-none rounded"></div>

                {/* Gavel Stamp Overlay when Retained */}
                <AnimatePresence>
                  {retainedMembers.includes(idx) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-950/[0.03] z-20 pointer-events-none">
                      <motion.div
                        initial={{ scale: 3.5, opacity: 0, rotate: -45 }}
                        animate={{ scale: 1, opacity: 0.9, rotate: idx % 2 === 0 ? -12 : -8 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        transition={{ type: 'spring', damping: 11, stiffness: 90 }}
                        className="border-4 border-double border-red-700 text-red-700 font-mono font-black text-xl md:text-2xl uppercase px-4 py-2 rounded-lg tracking-widest shadow-md bg-[#FFFEEB]/95 backdrop-blur-[0.5px]"
                      >
                        RETAINED
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>

                <div>
                  {/* Polaroid Photo attached with washi tape */}
                  <div className="relative w-full aspect-[3/4] max-w-[145px] mx-auto mb-5 mt-1 pointer-events-none">
                    {/* Retro Washi Tape */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-16 h-4 bg-yellow-600/20 backdrop-blur-[0.5px] border border-yellow-700/10 shadow-sm transform rotate-[-2deg]"></div>

                    {/* Polaroid Frame */}
                    <div className="w-full h-full bg-[#FDFBF7] p-2 pb-6 shadow-md border border-zinc-200/50 flex flex-col justify-between rounded transform rotate-[-1deg] group-hover:rotate-[1deg] group-hover:scale-105 transition-all duration-500">
                      <div className="relative w-full h-[82%] bg-zinc-950 overflow-hidden border border-zinc-200/20">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="145px"
                          className="object-cover object-top transition-all duration-500"
                        />
                        {/* Film grain effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] opacity-40"></div>
                      </div>
                      {/* Polaroid Label */}
                      <span className="text-[6px] font-mono text-zinc-500 font-bold uppercase tracking-wider text-center pt-0.5 block truncate">
                        EXHIBIT {String.fromCharCode(65 + idx)} {'//'} {member.stamp}
                      </span>
                    </div>
                  </div>

                  {/* Top scale of justice icon */}
                  <div className="flex justify-between items-start mb-3">
                    <svg className="w-5 h-5 text-zinc-800 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17M12 5L5 9M12 5l7 4M5 9c0 1.66 1.34 3 3 3s3-1.34 3-3M19 9c0 1.66-1.34 3-3-3s-3 1.34-3 3M8 12c0 2.2 1.8 4 4 4s4-1.8 4-4" />
                    </svg>
                    <span className="text-[7px] font-mono text-zinc-500 font-bold uppercase tracking-wider">ATTORNEYS AT ATTENTION</span>
                  </div>

                  <h3 className="text-lg font-black text-black tracking-wide font-sans mb-0.5 uppercase">
                    {member.name}
                  </h3>
                  <p className="text-[9px] font-mono font-bold tracking-widest text-[#b91c1c] uppercase mb-3 border-b border-zinc-900/10 pb-1.5">
                    {member.role}
                  </p>

                  {/* Saul-Style monospaced Quote */}
                  <p className="text-[11px] text-zinc-800 font-mono italic leading-relaxed pl-2 border-l-2 border-zinc-900/30">
                    &ldquo;{member.bio}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}