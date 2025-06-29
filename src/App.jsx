import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import ProcessSection from './components/ProcessSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <div id="servicios">
          <ServicesSection />
        </div>
        <div id="portafolio">
          <PortfolioSection />
        </div>
        <div id="proceso">
          <ProcessSection />
        </div>
        <div id="testimonios">
          <TestimonialsSection />
        </div>
        <div id="faq">
          <FaqSection />
        </div>
        <div id="contacto">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App
