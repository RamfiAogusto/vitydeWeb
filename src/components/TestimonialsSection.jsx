import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { cn } from "../lib/utils"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    position: "CEO, TechSolutions",
    content:
      "Trabajar con DevStudio ha sido una experiencia excepcional. Entendieron perfectamente nuestras necesidades y entregaron un sitio web que superó todas nuestras expectativas. El proceso fue fluido y la comunicación excelente.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Laura Martínez",
    position: "Directora de Marketing, FashionBrand",
    content:
      "Nuestra tienda online ha aumentado las ventas en un 40% desde que DevStudio rediseñó nuestra plataforma. La experiencia de usuario es impecable y el diseño refleja perfectamente nuestra marca. Totalmente recomendable.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Miguel Sánchez",
    position: "Fundador, StartupInnovation",
    content:
      "La landing page que crearon para el lanzamiento de nuestra app consiguió una tasa de conversión del 12%, muy por encima de lo esperado. Su enfoque en el diseño orientado a resultados marca la diferencia.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Ana García",
    position: "Directora General, ConsultingFirm",
    content:
      "Hemos trabajado con varios desarrolladores web en el pasado, pero DevStudio ha sido, sin duda, la mejor experiencia. Su atención al detalle y capacidad para entender nuestro negocio nos ha impresionado.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Javier López",
    position: "Propietario, LocalBusiness",
    content:
      "Como pequeño negocio, necesitábamos una presencia web profesional sin gastar una fortuna. DevStudio nos ofreció exactamente eso, con un servicio personalizado y resultados excepcionales.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef(null)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextTestimonial, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay])

  const handleManualNavigation = (callback) => {
    setAutoplay(false)
    callback()
    
    // Reactivar autoplay después de 10 segundos
    setTimeout(() => {
      setAutoplay(true)
    }, 10000)
  }

  const handleDotClick = (index) => {
    setAutoplay(false)
    setActiveIndex(index)
    
    // Reactivar autoplay después de 10 segundos
    setTimeout(() => {
      setAutoplay(true)
    }, 10000)
  }

  return (
    <section id="testimonios" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-30" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-slate-400">
            Nos enorgullece el feedback de nuestros clientes. Su satisfacción es nuestro mayor logro.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-purple-500 opacity-20">
            <Quote size={80} />
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-purple-500 p-1">
                          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                          </div>
                        </div>
                        <p className="text-lg mb-6 text-slate-300 leading-relaxed">"{testimonial.content}"</p>
                        <div>
                          <h4 className="font-medium text-slate-100">{testimonial.name}</h4>
                          <p className="text-sm text-slate-400">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => handleManualNavigation(prevTestimonial)}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex ? "w-6 bg-gradient-to-r from-blue-600 to-purple-600" : "bg-slate-700 hover:bg-slate-600",
                  )}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => handleManualNavigation(nextTestimonial)}
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 