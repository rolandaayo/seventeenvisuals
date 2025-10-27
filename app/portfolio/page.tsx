import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PortfolioGrid from "@/components/portfolio-grid"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-white/60 font-bold text-sm tracking-widest uppercase">Our Work</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-4">Portfolio</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Explore our complete collection of films, commercials, and videography projects.
            </p>
          </div>
          <PortfolioGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}
