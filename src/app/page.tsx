import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-main text-foreground font-sans">
      <Header />
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
