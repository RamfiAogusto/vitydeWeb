import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-slate-400">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>por</span>
            <span className="gradient-text font-semibold">VitydeWeb</span>
          </div>
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} VitydeWeb. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 