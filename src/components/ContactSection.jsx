import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent } from "./ui/card"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.")
  }

  const handleScheduleCall = () => {
    console.log("Agendar videollamada")
    // Aquí puedes agregar la lógica para agendar videollamada
  }

  return (
    <section id="contacto" className="py-20 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-30" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ponte en <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-slate-400">
            ¿Listo para impulsar tu presencia digital? Contáctanos hoy mismo para discutir tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-200">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-200">
                        Correo electrónico
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-200">
                        Teléfono (opcional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+34 123 456 789"
                        className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-200">
                        Asunto
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="¿En qué podemos ayudarte?"
                        required
                        className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-200">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      required
                      className="min-h-[150px] bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm h-full">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-4 text-slate-100">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-800 p-2 rounded-lg text-blue-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="font-medium text-slate-200">info@devstudio.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-slate-800 p-2 rounded-lg text-purple-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Teléfono</p>
                        <p className="font-medium text-slate-200">+34 123 456 789</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-slate-800 p-2 rounded-lg text-indigo-400">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Ubicación</p>
                        <p className="font-medium text-slate-200">Madrid, España</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4 text-slate-100">Horario de atención</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-slate-400">Lunes - Viernes</p>
                      <p className="text-slate-200">9:00 - 18:00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-slate-400">Sábado</p>
                      <p className="text-slate-200">10:00 - 14:00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-slate-400">Domingo</p>
                      <p className="text-slate-200">Cerrado</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-slate-700">
                    <p className="text-sm text-slate-300">
                      ¿Prefieres una consulta rápida? Programa una videollamada de 30 minutos con uno de nuestros
                      expertos.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 gradient-border text-slate-100 hover:text-slate-900"
                      onClick={handleScheduleCall}
                    >
                      Agendar videollamada
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 