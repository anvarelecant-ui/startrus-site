
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Gallery } from './components/Gallery'
import { TargetAudience } from './components/TargetAudience'
import { Pricing } from './components/Pricing'
import { Courses } from './components/Courses'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import StarScene from './components/3d/StarScene'

function App() {
  return (
    <div className="min-h-screen bg-transparent relative">
      <StarScene />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Gallery />
        <TargetAudience />
        <Pricing />
        <Courses />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
