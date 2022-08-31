import React from 'react'
import CTA from './components/CTA'
import Extensions from './components/Extensions'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Extensions />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

