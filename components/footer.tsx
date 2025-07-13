import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
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
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#portafolio" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Proceso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Optimización SEO
                </Link>
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
            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
