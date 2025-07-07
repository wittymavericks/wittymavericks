import Header from '@/components/Header'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-foreground font-sans">
      <Header />
      <div className="pt-24"> {/* Add padding to account for fixed header */}
        <ServicesSection />
        {/* Additional services content can be added here */}
        <ContactSection /> {/* Include contact section for CTA */}
      </div>
    </main>
  )
} 