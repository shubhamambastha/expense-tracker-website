import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Showcase from "./components/Showcase"
import Security from "./components/Security"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Legal from "./components/Legal"
import CookieBanner from "./components/CookieBanner"
import privacy from "./legal/PRIVACY_POLICY.md?raw"
import terms from "./legal/TERMS.md?raw"
import deleteAccount from "./legal/DELETE_ACCOUNT_PAGE.md?raw"

const legalPages = { "/privacy": privacy, "/terms": terms, "/delete-account": deleteAccount }

export default function App() {
  const legal = legalPages[location.pathname.replace(/\/$/, "")]

  return (
    <>
      {legal ? (
        <Legal markdown={legal} />
      ) : (
        <div className="min-h-screen bg-bg text-text">
          <Navbar />
          <Hero />
          <Features />
          <Showcase />
          <Security />
          <CTA />
          <Footer />
        </div>
      )}
      <CookieBanner />
    </>
  )
}
