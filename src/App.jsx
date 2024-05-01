import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <body>
    <header>
        <div>
          <ul className='list-none m-0 p-0  overflow-hidden fixed top-0 left-0 right-0 wx-100 bg-slate-900' >
            <li className='float-left hover:bg-slate-700 active:bg-violet-800 focus:outline-none focus:ring5focus:ring-violet-400 '><a className='block text-white text-center p-5 no-underline'>Inicio</a></li>
            <li className='float-left hover:bg-slate-700 active:bg-violet-800 focus:outline-none focus:ring5focus:ring-violet-400 '><a className='block text-white text-center p-5 no-underline'>Contacto</a></li>
            <li className='float-left hover:bg-slate-700 active:bg-violet-800 focus:outline-none focus:ring5focus:ring-violet-400 '><a className='block text-white text-center p-5 no-underline'>Acerca de mi</a></li>
            <li className='float-left hover:bg-slate-700 active:bg-violet-800 focus:outline-none focus:ring5focus:ring-violet-400 '><a className='block text-white text-center p-5 no-underline'>Galeria</a></li>
            <li className='float-left hover:bg-slate-700 active:bg-violet-800 focus:outline-none focus:ring5focus:ring-violet-400 '><a className='block text-white text-center p-5 no-underline'>Lenguajes</a></li>
            <li className='float-left hover:bg-slate-700 active:bg-violet-800 focus:outline-none focus:ring5focus:ring-violet-400 '><a className='block text-white text-center p-5 no-underline'>Frameworks</a></li>
            <li className='float-left hover:bg-slate-700 active:bg-violet-800 focus:outline-none focus:ring5focus:ring-violet-400 '><a className='block text-white text-center p-5 no-underline'>Juego</a></li>
            <li className='float-left hover:bg-slate-700 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-400 '><a className='block text-white text-center p-5 no-underline'>Mi camino</a></li>
          </ul>
        </div>
      </header>
    
      
    </body>
     
  )
}

export default App
