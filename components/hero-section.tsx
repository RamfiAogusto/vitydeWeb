"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      canvas: HTMLCanvasElement

      constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.x = Math.random() * this.canvas.width
        this.y = Math.random() * this.canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(${Math.floor(Math.random() * 50 + 139)}, ${Math.floor(Math.random() * 50 + 24)}, ${Math.floor(Math.random() * 55 + 200)}, ${Math.random() * 0.5 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > this.canvas.width) this.x = 0
        else if (this.x < 0) this.x = this.canvas.width

        if (this.y > this.canvas.height) this.y = 0
        else if (this.y < 0) this.y = this.canvas.height
      }

      draw() {
        if (!ctx) return // early return si ctx es null
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas))
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return // early return si ctx o canvas es null
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Connect particles with lines
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(139, 24, 255, ${0.15 - distance / 1000})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!canvas) return // early return si canvas es null
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", handleResize)

    init()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 w-full" style={{ opacity: 0.6 }} />

      <div className="container px-4 md:px-6 py-10 md:py-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500 mb-4">
              Desarrollo Web Profesional
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Desarrollo web <span className="gradient-text">profesional</span> a tu medida
            </h1>

            <p className="text-xl text-slate-400 max-w-[600px]">
              Creamos experiencias digitales únicas que impulsan tu negocio. Diseño moderno, tecnología avanzada y
              resultados excepcionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-vity-blue to-vity-purple hover:from-blue-700 hover:to-purple-700"
              >
                Solicitar presupuesto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline" className="gradient-border bg-transparent">
                Ver portafolio
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs border-2 border-background"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p>+50 clientes satisfechos</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden border border-slate-800 shadow-2xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 mix-blend-overlay" />
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Desarrollo web profesional"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-vity-blue to-vity-purple rounded-lg blur-2xl opacity-60" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-vity-purple rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}
