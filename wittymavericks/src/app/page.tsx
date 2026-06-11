import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkflowSection from '@/components/WorkflowSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-foreground font-sans">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WorkflowSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
