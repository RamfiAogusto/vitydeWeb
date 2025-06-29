import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const handleLinkClick = (href) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">VitydeWeb</h3>
            <p className="text-slate-400 text-sm">
              Desarrollo web profesional a tu medida. Creamos soluciones digitales que impulsan tu negocio.
            </p>
            <div className="flex space-x-4">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleLinkClick("#")}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("#servicios")}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("#portafolio")}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Portafolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("#proceso")}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Proceso
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-slate-400 hover:text-white text-sm transition-colors">
                  Desarrollo Web
                </button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-white text-sm transition-colors">
                  E-commerce
                </button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-white text-sm transition-colors">
                  Landing Pages
                </button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-white text-sm transition-colors">
                  Optimización SEO
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>info@vitydeweb.com</li>
              <li>+34 123 456 789</li>
              <li>Lunes - Viernes: 9:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} VitydeWeb. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="text-slate-400 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </button>
            <button className="text-slate-400 hover:text-white text-sm transition-colors">
              Términos y Condiciones
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 