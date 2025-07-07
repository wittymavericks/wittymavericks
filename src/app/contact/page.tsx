'use client';

import Header from '@/components/Header'
import ContactSection from '@/components/ContactSection'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <main className={`min-h-screen bg-black text-foreground ${inter.className}`}>
      <Header />
      <div className="pt-24"> {/* Add padding to account for fixed header */}
        {/* Hero Section */}
        <section className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Let&apos;s Start a <span className="text-[#fde047]">Conversation</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Have a project in mind? We&apos;d love to hear about it. Let&apos;s discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Team Photo Section */}
        <section className="bg-black py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#fde047] rounded-2xl transform rotate-2"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-zinc-800 rounded-2xl transform -rotate-1"></div>
              
              {/* Main image container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image
                  src="/images/team-photo.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover mix-blend-plus-lighter"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#fde047] rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-4 border-[#fde047] rounded-full"></div>
            </div>
          </div>
        </section>

        {/* <div className="relative aspect-[4/3] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Image
            src="/images/Sandy Project.webp"
            // src="https://api.dicebear.com/7.x/open-peeps/svg?seed=sudakshina&backgroundColor=fde047"
            alt="Our Team"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div> */}

        {/* Contact Form Section */}
        <ContactSection />

        {/* Office Locations */}
        <section className="bg-zinc-900 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Main Office */}
              <div className="group relative">
                <div className="absolute inset-0 bg-[#fde047] rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
                <div className="relative bg-black p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-white mb-4">Main Office</h3>
                  <div className="space-y-4 text-gray-400">
                    <p>123 Civil Lines</p>
                    <p>Jhansi 284001</p>
                    <p>Uttar Pradesh, India</p>
                    <div className="pt-4">
                      <p className="text-[#fde047]">Operating Hours:</p>
                      <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Center */}
              <div className="group relative">
                <div className="absolute inset-0 bg-[#fde047] rounded-2xl transform -rotate-2 group-hover:-rotate-1 transition-transform"></div>
                <div className="relative bg-black p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-white mb-4">Support Center</h3>
                  <div className="space-y-4 text-gray-400">
                    <p>Email: wittymavericks@gmail.com</p>
                    <p>Phone: +91 9250882554</p>
                    <p>Toll-free: 1800-MAVERICKS</p>
                    <div className="pt-4">
                      <p className="text-[#fde047]">Support Hours:</p>
                      <p>24/7 Online Support</p>
                      <p>Phone Support: Mon-Fri, 10:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 