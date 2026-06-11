'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { retroSound } from './RetroSound';

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Planning",
      emoji: "🎯",
      short: "Study, decode, and strategize.",
      long: "First, we study your brand, decode your audience, and build a plan too sharp to ignore. We analyze competitors, isolate current internet trends, and map out the exact angles that will win maximum attention. No generic scripts; only custom strategic setups."
    },
    {
      title: "Content Creation",
      emoji: "✍️🔥",
      short: "Visuals and posts made to stop thumbs.",
      long: "Then we turn ideas into witty content, bold visuals, and posts made to stop thumbs. Our creative team designs memes, write copy that sings, and shoots assets optimized specifically for the algorithm. It's built natural to the feed, yet powerful for your brand."
    },
    {
      title: "Client Approval",
      emoji: "✅",
      short: "Fine tune and lock it in.",
      long: "You give the green signal, we fine tune every detail, and lock it in. We review the files together, polish any last-minute adjustments, and prepare the campaign materials for deployment. Clean, transparent, and completely approved by you."
    },
    {
      title: "Execution",
      emoji: "🚀",
      short: "Launch at the right time for maximum noise.",
      long: "We launch at the right time, on the right platform, with maximum noise. Timing is everything on the internet. We jump on live trends, post during peak engagement windows, and seed the content across relevant networks to ensure your launch becomes a movement."
    },
    {
      title: "Reporting",
      emoji: "📈",
      short: "Wins, numbers, and results.",
      long: "Then we show you the numbers, the wins, and why calling us was smart. We compile reach, reactions, recall metrics, and business leads generated. No vanity numbers; just actual growth and clear proof of performance."
    }
  ];

  return (
    <section className="bg-[#08080a] py-24 border-t border-zinc-950 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono tracking-widest text-[#fde047] uppercase font-bold">
              THE SYSTEM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">OUR WORKFLOW</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base font-sans">
            How we take your brand objectives and turn them into coordinated online hype campaigns.
          </p>
        </div>

        {/* Interactive Desk Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Case Docket Steps */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-2">CASE FILES (SELECT STEP)</span>
            
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    retroSound.playTypewriter();
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-center justify-between group ${
                    isActive
                      ? 'bg-zinc-900 border-[#fde047] text-white shadow-[0_0_20px_rgba(253,224,71,0.1)]'
                      : 'bg-zinc-950/80 border-zinc-800 text-gray-400 hover:border-zinc-700 hover:text-gray-200'
                  }`}
                >
                  {/* Flashing yellow folder marker */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#fde047]"></div>
                  )}

                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-black px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#fde047] text-black' : 'bg-zinc-900 text-zinc-600 group-hover:text-zinc-500'
                    }`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-sm tracking-wide uppercase font-sans">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                        {step.short}
                      </p>
                    </div>
                  </div>

                  <span className="text-xl shrink-0 ml-2">{step.emoji}</span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Simulated Legal Yellow Pad */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-2 mb-2">CASE SUMMARY INQUEST</span>
            
            {/* Legal Pad Container */}
            <div className="bg-[#FFFEE5] text-zinc-900 rounded-2xl p-6 md:p-8 flex-1 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-[350px] flex flex-col justify-between border-2 border-[#E5DF99]">
              
              {/* Red Vertical Margin Line */}
              <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-red-400/40"></div>
              
              {/* Blue Writing lines background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,255,0.03)_1px,transparent_1px)] bg-[size:100%_2.2rem] pointer-events-none pt-12 pl-12 rounded-2xl"></div>

              {/* Pad Contents */}
              <div className="relative pl-10 pt-4 z-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#B5AF66] uppercase">
                    Exhibit B // Process Checklist
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-500">
                    Page {activeStep + 1} of 5
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{steps[activeStep].emoji}</span>
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-black border-b border-black pb-1 font-mono">
                        {steps[activeStep].title}
                      </h3>
                    </div>

                    <p className="text-zinc-800 text-sm md:text-base leading-[2.2rem] font-mono font-medium pt-2">
                      {steps[activeStep].long}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pad Bottom details */}
              <div className="relative pl-10 pt-6 mt-8 border-t border-zinc-200 z-10 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span>PROCEDURE ACTIVE</span>
                </div>
                <span>MAVERICK LITIGATION LABS</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
