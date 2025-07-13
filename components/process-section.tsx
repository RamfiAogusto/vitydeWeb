"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, FileSearch, Lightbulb, Rocket, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const processSteps = [
  {
    icon: <FileSearch className="h-8 w-8" />,
    title: "Consulta inicial",
    description: "Analizamos tus necesidades y objetivos para entender completamente tu proyecto.",
    color: "from-vity-blue to-blue-400",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Propuesta y planificación",
    description: "Desarrollamos una estrategia personalizada y un plan detallado para tu proyecto.",
    color: "from-indigo-600 to-indigo-400",
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Diseño y desarrollo",
    description: "Creamos prototipos y desarrollamos tu sitio con las últimas tecnologías.",
    color: "from-vity-purple to-purple-400",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Revisiones y ajustes",
    description: "Refinamos el proyecto según tus comentarios hasta lograr el resultado perfecto.",
    color: "from-purple-600 to-purple-400",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Implementación y lanzamiento",
    description: "Desplegamos tu sitio web y nos aseguramos de que todo funcione correctamente.",
    color: "from-fuchsia-600 to-fuchsia-400",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Soporte post-lanzamiento",
    description: "Ofrecemos mantenimiento continuo y soporte técnico para tu tranquilidad.",
    color: "from-vity-purple to-pink-400",
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="proceso" className="py-20 relative">
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-vity-purple/20 rounded-full blur-[130px] -z-10 opacity-35 animate-blob" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-vity-blue/15 rounded-full blur-[100px] -z-10 opacity-25 animate-blob-reverse" />

      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestro <span className="gradient-text">Proceso</span> de Trabajo
          </h2>
          <p className="text-slate-400">
            Un enfoque estructurado y transparente para garantizar resultados excepcionales en cada proyecto.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="border border-slate-800 rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm h-full">
                <div
                  className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white bg-gradient-to-r",
                    step.color,
                  )}
                >
                  {step.icon}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white font-medium text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium">{step.title}</h3>
                </div>

                <p className="text-slate-400">{step.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Connecting line for desktop */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-vity-blue to-vity-purple hidden lg:block -z-0" />
        </div>
      </div>
    </section>
  )
}
