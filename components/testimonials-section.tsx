"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

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

  const handleManualNavigation = (callback: () => void) => {
    setAutoplay(false)
    callback()
  }

  return (
    <section id="testimonios" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-vity-blue/20 rounded-full blur-[140px] -z-10 opacity-35 animate-blob-reverse" />
      <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-vity-purple/15 rounded-full blur-[110px] -z-10 opacity-25 animate-blob-slow" />

      <div className="container px-4 md:px-6">
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
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-vity-purple p-1">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <p className="text-lg mb-6 text-slate-300">"{testimonial.content}"</p>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
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
              className="rounded-full bg-transparent"
              onClick={() => handleManualNavigation(prevTestimonial)}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Anterior</span>
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === activeIndex ? "w-6 bg-gradient-to-r from-vity-blue to-vity-purple" : "bg-slate-700",
                  )}
                  onClick={() => {
                    setAutoplay(false)
                    setActiveIndex(index)
                  }}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-transparent"
              onClick={() => handleManualNavigation(nextTestimonial)}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
