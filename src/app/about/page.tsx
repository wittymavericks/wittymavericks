'use client';

import Header from '@/components/Header'
import AboutSection from '@/components/AboutSection'
import { Inter } from 'next/font/google'
// import Image from 'next/image'
// import { motion } from 'framer-motion'


const inter = Inter({ subsets: ['latin'] })

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       duration: 0.5
//     }
//   }
// };

// const teamMembers = [
//   {
//     name: 'Samarth Singh',
//     role: 'Founder',
//     image: 'https://api.dicebear.com/7.x/open-peeps/svg?seed=sarth&backgroundColor=fde047',
//     bio: 'Visionary leader driving innovation in digital marketing and brand strategy.'
//   },
//   {
//     name: 'Sudakshina Maitra',
//     role: 'Co-Founder',
//     image: 'https://api.dicebear.com/7.x/open-peeps/svg?seed=sudakshina&backgroundColor=fde047',
//     bio: 'Creative strategist specializing in brand development and digital transformation.'
//   },
//   {
//     name: 'Shruti Sharma',
//     role: 'Accounts Manager',
//     image: 'https://api.dicebear.com/7.x/open-peeps/svg?seed=shruti&backgroundColor=fde047',
//     bio: 'Financial expert ensuring smooth operations and business growth.'
//   }
// ]

export default function AboutPage() {
  return (
    <main className={`min-h-screen bg-black text-foreground ${inter.className}`}>
      <Header />
       <div className="pt-24">{/* Add padding to account for fixed header */}
        {/* Hero Section */}
        {/* <section className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                We Are <span className="text-[#fde047]">Witty Mavericks</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A team of passionate digital marketers and creators dedicated to helping brands stand out in the digital landscape.
                
              </p>
            </div>
          </div>
        </section> */}

        {/* Team Section */}
        {/* <section className="bg-[#fde047] py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-black/60"></div>
                <span className="text-black/80 uppercase tracking-wider text-sm font-medium">Our Team</span>
                <div className="w-8 h-[1px] bg-black/60"></div>
              </div>
              <h2 className="text-4xl font-bold text-black mb-6">Meet the Mavericks</h2>
              <p className="text-black/80 max-w-2xl mx-auto text-lg">
                At WM, every team member brings unique qualities that blend together to deliver the best strategies for boosting your brand.
              </p>
            </div> */}

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {teamMembers.map(member => (
                <motion.div
                  key={member.name}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                > */}
                  {/* Image Container */}
                  {/* <div className="relative w-48 h-48 mx-auto mb-6 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div> */}

                  {/* Text Content */}
                  {/* <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#fde047] mb-2">{member.name}</h3>
                    <p className="text-white/80 font-medium mb-4">{member.role}</p>
                    <p className="text-white/60">{member.bio}</p>
                  </div> */}

                  {/* Decorative Elements */}
                  {/* <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#fde047] rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#fde047] rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Main About Section */}
        <AboutSection />

        {/* Culture Section */}
        <section className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" items-center">
              <div>
                <div className="inline-flex items-center gap-4 mb-4">
                  <div className="w-8 h-[1px] bg-[#fde047]"></div>
                  <span className="text-[#fde047] uppercase tracking-wider text-sm">Our Culture</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Building a Culture of Innovation
                </h2>
                <p className="text-gray-400 mb-8">
                  At Witty Mavericks, we foster a culture of creativity, collaboration, and continuous learning. Our team thrives on challenges and is committed to pushing the boundaries of digital marketing.
                </p>
                <ul className="space-y-4">
                  {[
                    'Open and inclusive workplace',
                    'Continuous learning and development',
                    'Work-life balance',
                    'Innovation-driven approach'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-400">
                      <svg className="w-5 h-5 text-[#fde047]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/*<div className="relative">
                 <div className="absolute inset-0 bg-[#fde047] rounded-2xl transform rotate-3"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src="https://api.dicebear.com/7.x/open-peeps/svg?seed=team&backgroundColor=fde047&mood=happy&scale=120&radius=0&size=400"
                    alt="Our Culture of Innovation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 