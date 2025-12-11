import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsCrossFit from './components/WhatIsCrossFit'
import Benefits from './components/Benefits'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <main className="overflow-x-hidden">
        <Hero />
        <WhatIsCrossFit />
        <Benefits />
        <Programs />
        <Gallery />
        {/* <Testimonials /> */}
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App

