import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedWorks from "@/components/featured-works"
import Services from "@/components/services"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedWorks />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}
