import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Teacher } from './components/Teacher'
import { Advantages } from './components/Advantages'
import { Methodology } from './components/Methodology'
import { Programs } from './components/Programs'
import { CTA } from './components/CTA'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 relative selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Teacher />
        <Advantages />
        <Methodology />
        <Programs />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
