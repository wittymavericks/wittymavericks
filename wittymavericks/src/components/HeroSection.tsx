'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { retroSound } from './RetroSound';

const HeroSection: FC = () => {
  const [channel, setChannel] = useState(1);
  const [isChanging, setIsChanging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const changeChannel = () => {
    retroSound.playTVStaticClick();
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
      setChannel(prev => (prev === 4 ? 1 : prev + 1));
    }, 180);
  };

  // Render static white noise on the canvas when tuning or on channel 4
  useEffect(() => {
    if (!isChanging && channel !== 4) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.clientWidth || 300;
      canvas.height = canvas.clientHeight || 200;
    };
    resize();

    const renderNoise = () => {
      const w = canvas.width;
      const h = canvas.height;
      const imgData = ctx.createImageData(w, h);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const val = Math.floor(Math.random() * 255);
        data[i] = val;     // R
        data[i + 1] = val;   // G
        data[i + 2] = val;   // B
        data[i + 3] = 255;   // A
      }
      ctx.putImageData(imgData, 0, 0);
      animId = requestAnimationFrame(renderNoise);
    };

    renderNoise();
    return () => cancelAnimationFrame(animId);
  }, [channel, isChanging]);

  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Retro yellow pad glowing background element */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8">

            {/* Case file label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-yellow-400/30 rounded-md bg-yellow-400/5"
            >
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"></span>
              <span className="text-[10px] font-mono tracking-widest text-[#fde047] uppercase font-bold">
                Docket #2026: Attention Acquisition
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight font-sans"
              >
                NOWDAYS <span className="text-[#fde047] underline decoration-[#fde047]/30 underline-offset-8">ATTENTION</span> IS HARD TO GET.
              </motion.h1>

              {/* Staggered micro-statements */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm sm:text-base font-mono text-gray-400">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-1.5"
                >
                  <span className="text-yellow-400">●</span> People scroll fast.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-1.5"
                >
                  <span className="text-yellow-400">●</span> Trends move faster.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-1.5"
                >
                  <span className="text-yellow-400">●</span> Everyone is posting.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="flex items-center gap-1.5 "
                >
                  <span className="text-yellow-400">●</span> Few are remembered.
                </motion.span>
              </div>
            </div>

            {/* Agency Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans max-w-2xl border-l-2 border-yellow-400/40 pl-4 py-1"
            >
              Witty Mavericks helps brands become part of culture through sharp ideas, meme-first thinking and campaigns people actually engage with.
            </motion.p>

            {/* Billboard Neon CTA Button Box */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 items-stretch sm:items-center"
            >
              <Link href="/contact" className="group relative">
                {/* Saul billboard flashing background */}
                <div className="absolute -inset-0.5 bg-yellow-400 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
                <button className="relative w-full sm:w-auto bg-[#fde047] text-black font-extrabold py-4 px-8 rounded-xl transition duration-300 transform group-hover:scale-105 flex items-center justify-center gap-3 text-base tracking-widest font-mono border-2 border-black">
                  <span>NEED BUZZ? BETTER CALL US!</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce-horizontal" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>

              <Link href="/services" className="group">
                <button className="w-full sm:w-auto border-2 border-zinc-700 hover:border-yellow-400 bg-zinc-950 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-102 flex items-center justify-center gap-2 text-sm tracking-widest font-mono uppercase">
                  <span>Explore Dossier</span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right TV CRT Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            {/* CRT TV Case Wrapper */}
            <div className="relative w-full max-w-sm sm:max-w-md bg-zinc-900 border-4 border-zinc-800 rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">

              {/* Retro antenna structure */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-12 flex justify-between pointer-events-none">
                <div className="w-1 h-12 bg-zinc-800 origin-bottom -rotate-30 rounded-full"></div>
                <div className="w-1 h-12 bg-zinc-800 origin-bottom rotate-30 rounded-full"></div>
              </div>

              {/* TV Screen Surround */}
              <div className="bg-[#0b0b0d] rounded-2xl p-4 border border-zinc-800">
                <div className="relative aspect-video sm:aspect-square bg-zinc-950 rounded-xl overflow-hidden crt-screen border-2 border-zinc-900 flex flex-col justify-between p-3 select-none">

                  {/* CRT Top Bar */}
                  <div className="flex justify-between items-center z-20 border-b border-yellow-400/20 pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                      <span className="text-[9px] font-mono tracking-widest text-red-500 font-bold">CH. 0{channel}</span>
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-yellow-400/80 font-bold">MAVERICK.TV</span>
                  </div>

                  {/* Canvas for Noise Static */}
                  <canvas
                    ref={canvasRef}
                    className={`absolute inset-0 w-full h-full z-15 pointer-events-none transition-opacity duration-100 ${isChanging || channel === 4 ? 'opacity-100' : 'opacity-0'
                      }`}
                  />

                  {/* TV Displays based on Channel */}
                  <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                      {!isChanging && channel === 1 && (
                        <motion.div
                          key="ch1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full relative"
                        >
                          <img
                            src="/images/call-saul.jpg"
                            alt="Better Call Witty Mavericks"
                            className="object-cover w-full h-full opacity-40 grayscale brightness-125 contrast-125"
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                            <span className="text-[11px] font-mono text-[#fde047]/90 tracking-widest uppercase font-bold bg-black/60 px-2 py-1 border border-yellow-400/30 rounded shadow-md animate-pulse">
                              IT&apos;S ALL GOOD, BRAND.
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {!isChanging && channel === 2 && (
                        <motion.div
                          key="ch2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full relative"
                        >
                          <img
                            src="/images/team-photo.jpg"
                            alt="Surveillance Crew"
                            className="object-cover w-full h-full opacity-40 grayscale contrast-150 brightness-90"
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                            <span className="text-[9px] font-mono text-red-500 tracking-widest uppercase font-bold bg-black/75 px-2 py-1 border border-red-500/30 rounded">
                              EXHIBIT B: ACTIVE CREW FEED
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {!isChanging && channel === 3 && (
                        <motion.div
                          key="ch3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full flex flex-col justify-center items-center bg-black/90 p-4 border border-yellow-400/10 rounded-xl"
                        >
                          <div className="space-y-2 text-center font-mono">
                            <p className="text-[10px] text-yellow-400 tracking-widest animate-pulse font-bold">WITTY MAVERICKS INC.</p>
                            <p className="text-[9px] text-gray-400">JHANSI COMMAND CENTER</p>
                            <p className="text-xs text-white border-y border-yellow-400/30 py-1 font-bold">+91 9250882554</p>
                            <p className="text-[8px] text-zinc-500">DIAL FOR BRAND RESCUE</p>
                          </div>
                        </motion.div>
                      )}

                      {!isChanging && channel === 4 && (
                        <div className="w-full h-full flex justify-center items-center bg-transparent relative">
                          <span className="text-[10px] font-mono text-zinc-400 tracking-widest bg-black/60 px-2 py-1 rounded">
                            NO SIGNAL
                          </span>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* CRT Screen Footer */}
                  <div className="z-20 bg-black/80 backdrop-blur-sm border border-yellow-400/25 rounded-md p-1.5 mt-auto text-center">
                    <p className="text-[10px] font-mono font-bold tracking-widest text-[#fde047] uppercase">
                      {channel === 1 && "SOLVING CREATIVE CRIME"}
                      {channel === 2 && "EVIDENCE CAMERAS ACTIVE"}
                      {channel === 3 && "SECURE TRANSMISSION NODE"}
                      {channel === 4 && "SEARCHING TUNER..."}
                    </p>
                  </div>
                </div>
              </div>

              {/* TV Hardware Dials */}
              <div className="flex justify-between items-center mt-3 px-2 border-t border-zinc-800/60 pt-2.5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={changeChannel}
                    className="flex gap-1.5 items-center bg-zinc-950 px-2.5 py-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-yellow-400 hover:border-yellow-400/40 transition active:scale-95 shadow-inner"
                    title="Click to tune TV Channel"
                  >
                    {/* Rotating Dial Knob */}
                    <motion.div
                      animate={{ rotate: (channel - 1) * 90 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center"
                    >
                      <div className="w-1 h-1 bg-yellow-400 rounded-full -translate-y-1"></div>
                    </motion.div>
                    <span className="text-[8px] font-mono font-bold tracking-wider">TUNE CH</span>
                  </button>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-500 font-bold">
                  <span>CLICK KNOB TO CHANGE</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;