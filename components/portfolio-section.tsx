"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import Link from "next/link"

const categories = ["Todos", "Corporativos", "E-commerce", "Landing Pages"]

const projects = [
  {
    title: "TechCorp Website",
    category: "Corporativos",
    image: "/placeholder.svg?height=600&width=800",
    description: "Sitio web corporativo para empresa de tecnología con diseño moderno y funcionalidades avanzadas.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "FashionStore",
    category: "E-commerce",
    image: "/placeholder.svg?height=600&width=800",
    description: "Tienda online de moda con catálogo de productos, carrito de compras y pasarela de pagos.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "AppLaunch",
    category: "Landing Pages",
    image: "/placeholder.svg?height=600&width=800",
    description: "Landing page para el lanzamiento de una aplicación móvil con alta tasa de conversión.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
  },
  {
    title: "FinanceHub",
    category: "Corporativos",
    image: "/placeholder.svg?height=600&width=800",
    description: "Portal financiero con dashboard interactivo y visualización de datos en tiempo real.",
    technologies: ["Vue.js", "D3.js", "Firebase"],
  },
  {
    title: "GourmetMarket",
    category: "E-commerce",
    image: "/placeholder.svg?height=600&width=800",
    description: "Marketplace de productos gourmet con sistema de vendedores múltiples.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    title: "EventPromo",
    category: "Landing Pages",
    image: "/placeholder.svg?height=600&width=800",
    description: "Página promocional para evento con sistema de registro y cuenta regresiva.",
    technologies: ["React", "Firebase", "Styled Components"],
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portafolio" className="py-20 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vity-blue/20 rounded-full blur-[120px] -z-10 opacity-40 animate-blob-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-vity-purple/15 rounded-full blur-[100px] -z-10 opacity-30 animate-blob" />

      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestro <span className="gradient-text">Portafolio</span>
          </h2>
          <p className="text-slate-400">
            Explora algunos de nuestros proyectos más destacados. Cada trabajo refleja nuestro compromiso con la calidad
            y la innovación.
          </p>
        </div>

        <Tabs defaultValue="Todos" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-slate-900/50 backdrop-blur-sm border border-slate-800">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-vity-blue/20 data-[state=active]:to-vity-purple/20 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-lg border border-slate-800 transition-all duration-300",
                      hoveredIndex === index ? "gradient-border" : "",
                    )}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm text-slate-300 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, i) => (
                              <span key={i} className="text-xs bg-slate-800 px-2 py-1 rounded-full text-slate-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                            Ver proyecto
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-slate-900/50 backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{project.title}</h3>
                        <span className="text-xs text-slate-400 px-2 py-1 rounded-full bg-slate-800">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link href="/portafolio">
            <Button variant="outline" className="gradient-border gap-2 bg-transparent">
              Ver más proyectos
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
