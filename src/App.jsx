import { useState } from 'react'
import './App.css'
import Aboutus from './pages/Home/Aboutus/Aboutus'
import ContactUs from './pages/contactus/contactus'

function App() {
  return (
    <div className="app">
      <Aboutus />
      <ContactUs />
    </div>
  )
}

export default App

