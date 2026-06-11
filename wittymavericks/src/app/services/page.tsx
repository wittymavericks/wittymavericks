import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import WorkflowSection from '@/components/WorkflowSection';
import ContactSection from '@/components/ContactSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-foreground font-sans">
      <Header />
      <div className="pt-24">
        <ServicesSection />
        <WorkflowSection />
        <ContactSection />
      </div>
    </main>
  );
}