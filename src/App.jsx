import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            VitydeWeb
          </h1>
          <p className="text-gray-600 mb-8">
            React + Vite + TailwindCSS
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-6xl font-bold text-indigo-600 mb-4">
              {count}
            </div>
            <p className="text-gray-600">
              Contador actual
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleDecrement}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Decrementar contador"
            >
              -1
            </button>
            
            <button
              onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Resetear contador"
            >
              Reset
            </button>
            
            <button
              onClick={handleIncrement}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Incrementar contador"
            >
              +1
            </button>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              ✅ React funcionando<br />
              ✅ Vite configurado<br />
              ✅ TailwindCSS activo
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
