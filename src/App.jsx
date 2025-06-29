import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

export default App
