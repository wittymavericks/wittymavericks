'use client';

import React, { useState } from 'react';
import { retroSound } from './RetroSound';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    retroSound.playGavel();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    console.log('🚀 Starting form submission...', formData);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        console.log('✉️ Sending message via EmailJS...');
        const result = await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'wittymavericks@gmail.com',
          },
          {
            publicKey: publicKey,
          }
        );
        console.log('📥 EmailJS response:', result);
        if (result.status === 200) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          console.log('✨ Message sent successfully via EmailJS!');
        } else {
          throw new Error('EmailJS failed to send');
        }
      } else {
        console.log('✉️ EmailJS keys missing, falling back to local Resend API route...');
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        console.log('📥 Received API response:', response);
        const data = await response.json();
        console.log('📄 API Response data:', data);

        if (data.success) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          console.log('✨ Message sent successfully via Resend API!');
        } else {
          throw new Error(data.error || 'Failed to send message');
        }
      }
    } catch (error) {
      console.error('💥 Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#fde047] py-24 text-black relative overflow-hidden">

      {/* Tiny aesthetic details like typewriter borders */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(90deg,black,black_10px,transparent_10px,transparent_20px)]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* CLOSER BANNER (Better Call Saul Billboard Style) */}
        <div className="mb-20 bg-black rounded-3xl overflow-hidden border-4 border-black shadow-2xl relative">

          {/* Top Red Band */}
          <div className="bg-red-700 text-white font-sans font-black text-center py-2.5 px-4 text-sm sm:text-base md:text-lg tracking-wider uppercase border-b-4 border-black select-none">
            IN ATTENTION EMERGENCY?
          </div>

          {/* Middle Yellow/Gold Billboard Area */}
          <div className="bg-[#f5c312] p-8 md:p-12 relative flex flex-col md:flex-row items-center justify-between min-h-[300px] overflow-hidden">
            {/* Yellow legal pad rules lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100%_1.5rem] pointer-events-none"></div>

            {/* Left Content (Text) */}
            <div className="relative z-10 w-full md:w-3/5 text-center md:text-left space-y-4">
              <h2 className="font-signature text-zinc-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-sm select-none leading-tight tracking-wide">
                &ldquo;Better Call Witty Mavericks&rdquo;
              </h2>

              <div className="flex justify-center md:justify-start">
                <svg className="w-10 h-10 text-black drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17M12 5L5 9M12 5l7 4M5 9c0 1.66 1.34 3 3 3s3-1.34 3-3M19 9c0 1.66-1.34 3-3-3s-3 1.34-3 3M8 12c0 2.2 1.8 4 4 4s4-1.8 4-4" />
                </svg>
              </div>

              <div className="space-y-1">
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-mono font-black tracking-widest text-white uppercase drop-shadow-[0_3px_0_#000]"
                  style={{ WebkitTextStroke: '1.5px black' }}
                >
                  WITTY MAVERICKS
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-mono font-black tracking-widest text-black uppercase underline decoration-2 decoration-black underline-offset-4">
                  CREATIVE MARKETING COMPANY
                </div>
              </div>

              <div className="pt-2">
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-mono font-black text-[#e05638] tracking-wider drop-shadow-[0_3px_0_#000]"
                  style={{ WebkitTextStroke: '1.5px black' }}
                >
                  +91 92508-82554
                </div>
                <span className="text-[10px] font-mono font-black text-black tracking-widest block mt-1 uppercase">
                  CALL THE MAVERICKS NOW!
                </span>
              </div>
            </div>

            {/* Right Content (Saul pointing) */}
            <div className="hidden md:block absolute bottom-0 right-0 h-full w-[42%] max-w-[310px] z-10">
              <img
                src="/images/call-saul.jpg"
                alt="Saul Goodman Pointing"
                className="w-full h-full object-cover object-center filter contrast-125 brightness-105 border-l-4 border-black"
              />
            </div>
          </div>

          {/* Bottom Red Band */}
          <div className="bg-red-700 text-white font-sans font-black text-center py-2.5 px-4 text-xs sm:text-sm tracking-wider uppercase border-t-4 border-black select-none">
          </div>
        </div>

        {/* Contact info and Form layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs font-mono tracking-widest text-black uppercase font-bold border-b-2 border-black pb-1">
                  OFFICE DIRECTORY
                </span>
              </div>
              <h3 className="text-4xl font-extrabold text-black uppercase tracking-tight leading-none">
                INITIATE THE ACQUISITION
              </h3>
              <p className="text-black/80 text-sm leading-relaxed max-w-md font-sans">
                Tell us about your brand&apos;s attention deficit or creative emergency. Our strategists will review the docket and call you back immediately.
              </p>

              <div className="space-y-6 pt-6 border-t border-black/10">
                {/* Phone */}
                <div
                  onClick={() => retroSound.playPhoneBell()}
                  className="flex items-center gap-4 group cursor-pointer"
                  title="Click to dial!"
                >
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-[#fde047] shrink-0 transform transition duration-300 group-hover:rotate-6 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold tracking-widest text-black/50 uppercase">ATTENTION EMERGENCY HOTLINE</h4>
                    <p className="text-lg font-black text-black tracking-wide">+91 9250882554</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-[#fde047] shrink-0 transform transition duration-300 group-hover:rotate-6 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold tracking-widest text-black/50 uppercase">SECURE DOSSIER INTAKE</h4>
                    <p className="text-lg font-black text-black tracking-wide">wittymavericks@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-[#fde047] shrink-0 transform transition duration-300 group-hover:rotate-6 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold tracking-widest text-black/50 uppercase">LITIGATION COMMAND HEADQUARTERS</h4>
                    <p className="text-lg font-black text-black tracking-wide">Jhansi, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Playful disclaimer */}
            <p className="text-[9px] font-mono text-black/40 mt-8 border-t border-black/5 pt-4 max-w-sm">
              *Disclaimer: Engaging Witty Mavericks leads to extreme brand reach, increased conversational visibility, and severe trendjacking tendencies. Proceed with caution.
            </p>
          </div>

          {/* Contact Form styled like a Legal Inquest Brief */}
          <div className="relative">
            {/* Border shadow decoration */}
            <div className="absolute inset-0 bg-black rounded-2xl transform rotate-1 shadow-2xl"></div>

            {/* Form Sheet */}
            <div className="relative bg-zinc-950 text-white p-8 rounded-2xl border border-zinc-900">
              <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest">
                  FORM CF-925: INQUEST SUBMISSION
                </span>
                <span className="text-[9px] font-mono text-[#fde047] font-black border border-[#fde047]/30 px-1.5 py-0.5 rounded uppercase">
                  URGENT
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase mb-2">
                    Client Name / Representative
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      retroSound.playTypewriter();
                    }}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-[#fde047] focus:ring-1 focus:ring-[#fde047]"
                    placeholder="E.g. Saul Goodman"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase mb-2">
                    Dossier Reply Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      retroSound.playTypewriter();
                    }}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-[#fde047] focus:ring-1 focus:ring-[#fde047]"
                    placeholder="you@brand.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase mb-2">
                    Case Details (Attention Emergency Description)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      retroSound.playTypewriter();
                    }}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-[#fde047] focus:ring-1 focus:ring-[#fde047] leading-relaxed"
                    placeholder="Briefly describe your marketing goals or what attention challenge you need solved..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#fde047] text-black font-extrabold py-3.5 px-8 rounded-lg hover:bg-yellow-300 transition duration-300 disabled:opacity-50 tracking-widest font-mono text-xs uppercase"
                >
                  {isSubmitting ? 'TRANSMITTING FILES...' : 'SUBMIT ATTENTION INQUEST'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 font-mono text-xs mt-2 text-center">✓ Case brief received successfully. It&apos;s all good, brand.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 font-mono text-xs mt-2 text-center">✗ Transmission failed. Please try dialing direct instead.</p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}