import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { cn } from "../lib/utils"

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

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const handleViewProject = (project) => {
    console.log("Ver proyecto:", project.title)
    // Aquí puedes agregar la lógica para ver el proyecto
  }

  const handleViewMore = () => {
    console.log("Ver más proyectos")
    // Aquí puedes agregar la lógica para ver más proyectos
  }

  return (
    <section id="portafolio" className="py-20 relative">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] -z-10 opacity-30" />

      <div className="container mx-auto px-4 md:px-6">
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
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white text-slate-300"
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
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-lg border border-slate-800 transition-all duration-300",
                      hoveredIndex === index ? "gradient-border" : "",
                    )}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <ExternalLink className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-slate-400 text-sm">{project.category}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                          <p className="text-sm text-slate-300 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, i) => (
                              <span key={i} className="text-xs bg-slate-800 px-2 py-1 rounded-full text-slate-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="gap-2 text-slate-100 hover:text-slate-900"
                            onClick={() => handleViewProject(project)}
                          >
                            Ver proyecto
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-slate-900/50 backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-slate-100">{project.title}</h3>
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
          <Button 
            variant="outline" 
            className="gradient-border gap-2 text-slate-100 hover:text-slate-900"
            onClick={handleViewMore}
          >
            Ver más proyectos
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection 