'use client';

import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-foreground font-sans">
      <Header />
      <div className="pt-24">
        {/* Main About Section */}
        <AboutSection />

        {/* Culture / Bylaws Section */}
        <section className="bg-[#050505] py-20 border-t border-zinc-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono tracking-widest text-[#fde047] uppercase font-bold">
                  THE BYLAWS
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 uppercase">
                Rules of the Mavericks Culture
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                At Witty Mavericks, we foster a culture of creativity, collaboration, and continuous learning. Our team thrives on challenges and is committed to pushing the boundaries of digital marketing.
              </p>
              
              {/* Bylaws List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Bylaw 01: The Smarter Way Out", desc: "No matter the complexity of the project, we find the most innovative and efficient path forward." },
                  { title: "Bylaw 02: Stay Shaped by the Net", desc: "We live and breathe internet culture, constantly decoding memes, behaviors, and shifting trends." },
                  { title: "Bylaw 03: Move Fast, Stay Sharp", desc: "Speed is nothing without accuracy. We launch rapidly but lock in every fine detail with precision." },
                  { title: "Bylaw 04: Open Collaboration", desc: "An inclusive environment where every maverick has a voice and plays a vital role in campaigns." }
                ].map((item, index) => (
                  <div key={index} className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl relative overflow-hidden group hover:border-[#fde047]/30 transition duration-300">
                    <span className="text-[10px] font-mono text-[#fde047] font-bold block mb-2">{item.title}</span>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}