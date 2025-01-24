import { useState } from 'react'
import './App.css'
import Aboutus from './pages/Home/Aboutus/Aboutus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Aboutus />
    </div>
  )
}

export default App

