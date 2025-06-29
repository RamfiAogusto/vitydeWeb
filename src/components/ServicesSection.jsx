import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Globe, Layers, Smartphone, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { cn } from "../lib/utils"

const services = [
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Desarrollo Web Corporativo",
    description: "Sitios web profesionales que representan la identidad de tu empresa y conectan con tus clientes.",
    features: ["Diseño personalizado", "Responsive", "Optimizado para SEO", "Integración con CMS"],
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Tiendas Online / E-commerce",
    description: "Plataformas de comercio electrónico completas para vender tus productos o servicios en línea.",
    features: [
      "Catálogo de productos",
      "Pasarelas de pago",
      "Gestión de inventario",
      "Experiencia de compra optimizada",
    ],
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Landing Pages",
    description:
      "Páginas de aterrizaje diseñadas para convertir visitantes en clientes con llamadas a la acción efectivas.",
    features: ["Diseño enfocado en conversión", "Carga rápida", "A/B testing", "Analítica integrada"],
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Desarrollo Frontend",
    description: "Interfaces de usuario modernas y atractivas con las últimas tecnologías web.",
    features: ["React/Next.js", "Animaciones fluidas", "Interfaces intuitivas", "Rendimiento optimizado"],
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Desarrollo Backend",
    description: "Sistemas robustos y escalables que potencian tu aplicación web.",
    features: ["APIs RESTful", "Bases de datos", "Autenticación segura", "Arquitectura escalable"],
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Optimización SEO",
    description: "Mejora la visibilidad de tu sitio en los motores de búsqueda y atrae más tráfico cualificado.",
    features: [
      "Auditoría técnica",
      "Optimización de contenido",
      "Estrategia de palabras clave",
      "Análisis de competencia",
    ],
  },
]

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
  }

  return (
    <section id="servicios" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-slate-400">
            Ofrecemos soluciones digitales completas para ayudarte a destacar en el mundo digital. Desde el diseño hasta
            el desarrollo, cubrimos todas tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card
                className={cn(
                  "border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 h-full",
                  activeIndex === index ? "gradient-border" : "",
                )}
              >
                <CardHeader>
                  <div
                    className={cn(
                      "p-3 rounded-lg w-fit mb-4 transition-colors",
                      activeIndex === index
                        ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-purple-400"
                        : "bg-slate-800 text-slate-400",
                    )}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-100">{service.title}</CardTitle>
                  <CardDescription className="text-slate-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 