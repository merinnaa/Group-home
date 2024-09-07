import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)


    
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow text-center p-4">
          {/* Example content */}
          <h1 className="text-2xl font-bold">Welcome to My App!</h1>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Count is {count}
          </button>
          
        </main>
        
        
        <Footer />
        
      </div>
    );
  }
  


export default App
