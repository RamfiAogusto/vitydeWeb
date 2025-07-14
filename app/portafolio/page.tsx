"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const categories = ["Todos", "Corporativos", "E-commerce", "Landing Pages", "Aplicaciones Web"]

const allProjects = [
  {
    title: "TechCorp Website",
    category: "Corporativos",
    image: "/placeholder.svg?height=600&width=800",
    description: "Sitio web corporativo para empresa de tecnología con diseño moderno y funcionalidades avanzadas.",
    longDescription:
      "Desarrollo completo de sitio web corporativo para empresa líder en tecnología. Incluye sistema de gestión de contenidos, integración con CRM, y dashboard administrativo personalizado.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    client: "TechCorp Solutions",
  },
  {
    title: "FashionStore",
    category: "E-commerce",
    image: "/placeholder.svg?height=600&width=800",
    description: "Tienda online de moda con catálogo de productos, carrito de compras y pasarela de pagos.",
    longDescription:
      "Plataforma de e-commerce completa con gestión de inventario, sistema de pagos múltiples, y panel de administración avanzado para gestión de pedidos y clientes.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    client: "Fashion Trends",
  },
  {
    title: "AppLaunch",
    category: "Landing Pages",
    image: "/placeholder.svg?height=600&width=800",
    description: "Landing page para el lanzamiento de una aplicación móvil con alta tasa de conversión.",
    longDescription:
      "Landing page optimizada para conversión con animaciones interactivas, formularios de registro, y integración con herramientas de marketing digital.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Mailchimp"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
    client: "StartupLaunch",
  },
  {
    title: "FinanceHub",
    category: "Corporativos",
    image: "/placeholder.svg?height=600&width=800",
    description: "Portal financiero con dashboard interactivo y visualización de datos en tiempo real.",
    longDescription:
      "Portal financiero completo con dashboards interactivos, gráficos en tiempo real, y sistema de reportes automatizados para análisis financiero.",
    technologies: ["Vue.js", "D3.js", "Firebase", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    client: "Finance Solutions",
  },
  {
    title: "GourmetMarket",
    category: "E-commerce",
    image: "/placeholder.svg?height=600&width=800",
    description: "Marketplace de productos gourmet con sistema de vendedores múltiples.",
    longDescription:
      "Marketplace completo con sistema multi-vendedor, gestión de comisiones, sistema de reviews, y panel de control para vendedores independientes.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Stripe Connect"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    client: "Gourmet Collective",
  },
  {
    title: "EventPromo",
    category: "Landing Pages",
    image: "/placeholder.svg?height=600&width=800",
    description: "Página promocional para evento con sistema de registro y cuenta regresiva.",
    longDescription:
      "Landing page para evento corporativo con sistema de registro, cuenta regresiva interactiva, y integración con plataformas de streaming en vivo.",
    technologies: ["React", "Firebase", "Styled Components", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
    client: "Event Masters",
  },
  {
    title: "HealthCare Portal",
    category: "Aplicaciones Web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Portal de salud con sistema de citas médicas y gestión de pacientes.",
    longDescription:
      "Aplicación web completa para clínicas con sistema de citas, historiales médicos, facturación, y comunicación paciente-doctor.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    client: "MediCare Clinic",
  },
  {
    title: "EduPlatform",
    category: "Aplicaciones Web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Plataforma educativa online con cursos interactivos y sistema de evaluación.",
    longDescription:
      "Plataforma de aprendizaje online con cursos multimedia, sistema de evaluaciones, progreso de estudiantes, y herramientas de comunicación.",
    technologies: ["Next.js", "MongoDB", "AWS S3", "Stripe", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    client: "EduTech Solutions",
  },
  {
    title: "RestaurantPOS",
    category: "Aplicaciones Web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Sistema POS para restaurantes con gestión de mesas y pedidos en tiempo real.",
    longDescription:
      "Sistema completo de punto de venta para restaurantes con gestión de mesas, pedidos en tiempo real, inventario, y reportes de ventas.",
    technologies: ["Vue.js", "Node.js", "MySQL", "Socket.io", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
    client: "Restaurant Chain",
  },
  {
    title: "CryptoTracker",
    category: "Aplicaciones Web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Aplicación de seguimiento de criptomonedas con análisis técnico avanzado.",
    longDescription:
      "Aplicación web para tracking de criptomonedas con gráficos avanzados, alertas de precio, portfolio tracking, y análisis técnico automatizado.",
    technologies: ["React", "TypeScript", "TradingView", "WebSocket", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    client: "Crypto Analytics",
  },
  {
    title: "PropertyManager",
    category: "Corporativos",
    image: "/placeholder.svg?height=600&width=800",
    description: "Sistema de gestión inmobiliaria con tours virtuales y CRM integrado.",
    longDescription:
      "Plataforma completa de gestión inmobiliaria con tours virtuales 360°, CRM para agentes, sistema de leads, y portal para propietarios.",
    technologies: ["Next.js", "Three.js", "Supabase", "Mapbox", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    client: "Real Estate Pro",
  },
  {
    title: "FitnessApp",
    category: "Landing Pages",
    image: "/placeholder.svg?height=600&width=800",
    description: "Landing page para app de fitness con calculadoras interactivas y planes personalizados.",
    longDescription:
      "Landing page interactiva para aplicación de fitness con calculadoras de IMC, planes de entrenamiento personalizados, y sistema de suscripciones.",
    technologies: ["React", "Framer Motion", "Stripe", "EmailJS", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
    client: "FitLife App",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "Todos" ? allProjects : allProjects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen pt-20">
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-vity-purple/20 rounded-full blur-[140px] -z-10 opacity-40 animate-blob" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-vity-blue/15 rounded-full blur-[120px] -z-10 opacity-30 animate-blob-reverse" />
      <div className="absolute top-2/3 left-1/3 w-[350px] h-[350px] bg-vity-purple/10 rounded-full blur-[100px] -z-10 opacity-25 animate-blob-slow" />

      <div className="container px-4 md:px-6 py-10">
        {/* Header */}
        <div className="mb-12">
          <Link href="/#portafolio">
            <Button variant="outline" className="mb-6 gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro <span className="gradient-text">Portafolio</span> Completo
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Explora todos nuestros proyectos y descubre cómo hemos ayudado a empresas de diferentes sectores a
              alcanzar sus objetivos digitales con soluciones innovadoras y diseño excepcional.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-vity-purple"></div>
                <span>+{allProjects.length} proyectos completados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-vity-blue"></div>
                <span>100% clientes satisfechos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>Tecnologías modernas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <Tabs defaultValue="Todos" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 flex-wrap h-auto p-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-vity-blue/20 data-[state=active]:to-vity-purple/20 data-[state=active]:text-white whitespace-nowrap"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-lg border border-slate-800 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm",
                      hoveredIndex === index ? "gradient-border transform -translate-y-2" : "",
                    )}
                  >
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Overlay with actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-3">
                          <Button size="sm" className="bg-vity-purple hover:bg-vity-purple/80">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ver sitio
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Github className="h-4 w-4 mr-2" />
                            Código
                          </Button>
                        </div>
                      </div>

                      {/* Year badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-slate-800/80 text-slate-200">
                          {project.year}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold group-hover:text-vity-purple transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>

                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.longDescription}</p>

                      <div className="mb-4">
                        <p className="text-xs text-slate-500 mb-2">Cliente: {project.client}</p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-slate-800 px-2 py-1 rounded-full text-slate-300 hover:bg-vity-purple/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-slate-500">+{project.technologies.length - 3} más</span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-vity-blue to-vity-purple hover:from-blue-700 hover:to-purple-700"
                        >
                          Ver detalles
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-lg bg-gradient-to-r from-vity-blue/10 to-vity-purple/10 border border-slate-800">
            <h2 className="text-2xl font-bold mb-4">
              ¿Listo para crear tu próximo <span className="gradient-text">proyecto</span>?
            </h2>
            <p className="text-slate-400 mb-6">
              Cada proyecto es único y está diseñado específicamente para las necesidades de nuestros clientes.
              Contáctanos para discutir tu próxima idea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contacto">
                <Button className="bg-gradient-to-r from-vity-blue to-vity-purple hover:from-blue-700 hover:to-purple-700">
                  Solicitar presupuesto
                </Button>
              </Link>
              <Link href="/#proceso">
                <Button variant="outline" className="gradient-border bg-transparent">
                  Ver nuestro proceso
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
