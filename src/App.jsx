import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Showcase from "./components/Showcase"
import Security from "./components/Security"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Security />
      <CTA />
      <Footer />
    </div>
  )
}
