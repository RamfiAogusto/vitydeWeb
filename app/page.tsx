import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProcessSection from "@/components/process-section"
import ContactSection from "@/components/contact-section"
import FaqSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContactSection />
      <FaqSection />
    </main>
  )
}
