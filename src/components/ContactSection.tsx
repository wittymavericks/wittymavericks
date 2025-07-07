'use client';
import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
    setIsSubmitting(true);
    console.log('🚀 Starting form submission...', formData);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📥 Received response:', response);
      const data = await response.json();
      console.log('📄 Response data:', data);

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        console.log('✨ Form submitted successfully!');
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('💥 Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`bg-[#fde047] py-24 ${inter.className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-black"></div>
              <span className="text-black uppercase tracking-wider text-sm">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8">Let&apos;s Create Something Amazing Together</h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center transform transition-transform group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#fde047]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-1">Phone</h3>
                  <p className="text-black/80">+91 9250882554</p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center transform transition-transform group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#fde047]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-1">Email</h3>
                  <p className="text-black/80">wittymavericks@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center transform transition-transform group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#fde047]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-1">Location</h3>
                  <p className="text-black/80">Jhansi, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Background layers */}
            <div className="absolute inset-0 bg-black rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl transform -rotate-1"></div>
            
            {/* Form */}
            <div className="relative bg-zinc-900 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#fde047]"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#fde047]"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#fde047]"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#fde047] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#fde047]/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm mt-2">Failed to send message. Please try again.</p>
                )}
              </form>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-[#fde047] rounded-full opacity-50"></div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="w-3 h-3 border-2 border-[#fde047] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 