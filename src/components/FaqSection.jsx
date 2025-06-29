import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { cn } from "../lib/utils"

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en desarrollarse un sitio web?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page sencilla puede estar lista en 1-2 semanas, mientras que un sitio corporativo completo o una tienda online puede llevar de 4 a 8 semanas. Durante la consulta inicial, proporcionaremos un cronograma detallado específico para tu proyecto.",
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer:
      "Aceptamos transferencias bancarias, tarjetas de crédito/débito y PayPal. Generalmente, solicitamos un 50% de anticipo al inicio del proyecto y el 50% restante a la entrega. Para proyectos más grandes, podemos establecer un plan de pagos por etapas.",
  },
  {
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer:
      "Sí, ofrecemos varios planes de mantenimiento mensual que incluyen actualizaciones de seguridad, copias de seguridad, pequeñas modificaciones y soporte técnico. También podemos proporcionar formación para que tu equipo pueda gestionar el contenido del sitio.",
  },
  {
    question: "¿Cómo garantizan que mi sitio web sea seguro?",
    answer:
      "Implementamos las mejores prácticas de seguridad, incluyendo certificados SSL, protección contra ataques DDoS, firewalls de aplicaciones web y actualizaciones regulares. Además, realizamos copias de seguridad periódicas para garantizar que tus datos estén siempre protegidos.",
  },
  {
    question: "¿Puedo actualizar el contenido de mi sitio web por mi cuenta?",
    answer:
      "Absolutamente. Desarrollamos sitios web con sistemas de gestión de contenido (CMS) intuitivos que te permiten actualizar textos, imágenes y otros contenidos sin conocimientos técnicos. Además, proporcionamos documentación y formación para que puedas gestionar tu sitio con confianza.",
  },
  {
    question: "¿Qué información necesitan para empezar mi proyecto?",
    answer:
      "Para comenzar, necesitamos entender tus objetivos de negocio, público objetivo, preferencias de diseño y funcionalidades requeridas. Es útil si tienes ejemplos de sitios web que te gusten, tu logotipo, paleta de colores y cualquier contenido existente. Durante nuestra consulta inicial, te guiaremos a través de todo lo que necesitamos.",
  },
  {
    question: "¿Ofrecen servicios de SEO y marketing digital?",
    answer:
      "Sí, además del desarrollo web, ofrecemos servicios de optimización para motores de búsqueda (SEO), marketing de contenidos, gestión de redes sociales y campañas de publicidad digital. Podemos crear una estrategia integral para aumentar tu visibilidad online y atraer más clientes.",
  },
  {
    question: "¿Cómo miden el éxito de un sitio web?",
    answer:
      "Medimos el éxito a través de varios KPIs según tus objetivos: tráfico web, tasas de conversión, tiempo de permanencia, tasa de rebote, posicionamiento en buscadores, etc. Implementamos herramientas de análisis para proporcionarte informes periódicos sobre el rendimiento de tu sitio.",
  },
]

const FaqSection = () => {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (value) => {
    setOpenItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  const handleContactClick = () => {
    console.log("Contactar ahora")
    // Aquí puedes agregar lógica para scroll al formulario de contacto
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] -z-10 opacity-30" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-slate-400">
            Respuestas a las preguntas más comunes sobre nuestros servicios y proceso de trabajo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" value={openItems} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className={cn(
                    "border border-slate-800 rounded-lg overflow-hidden bg-slate-900/50 backdrop-blur-sm",
                    openItems.includes(`item-${index}`) ? "gradient-border" : "",
                  )}
                >
                  <AccordionTrigger
                    onClick={() => toggleItem(`item-${index}`)}
                    className="px-6 py-4 hover:no-underline text-slate-100"
                  >
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-slate-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-6 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-slate-800">
            <h3 className="text-xl font-medium mb-2 text-slate-100">¿No encuentras la respuesta que buscas?</h3>
            <p className="text-slate-400 mb-4">Estamos aquí para resolver todas tus dudas. Contáctanos directamente.</p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={handleContactClick}
            >
              Contactar ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection 