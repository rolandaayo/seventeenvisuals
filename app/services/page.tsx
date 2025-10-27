import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Film, Camera, Clapperboard, Sparkles, Users, Zap } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Film,
      title: "Commercial Films",
      description:
        "High-quality commercials and brand films that tell your story and drive engagement. Perfect for advertising campaigns, product launches, and brand awareness.",
      features: ["Concept Development", "Scriptwriting", "Professional Crew", "4K/8K Production"],
    },
    {
      icon: Camera,
      title: "BTS & Documentary",
      description:
        "Authentic behind-the-scenes content and documentary-style videography that captures real moments and authentic stories.",
      features: ["Event Coverage", "Documentary Style", "Authentic Storytelling", "Multi-Camera Setup"],
    },
    {
      icon: Clapperboard,
      title: "Music Videos",
      description:
        "Creative music video production with cinematic visuals and artistic direction. We bring your music to life visually.",
      features: ["Creative Direction", "Choreography", "Visual Effects", "Color Grading"],
    },
    {
      icon: Sparkles,
      title: "Post-Production",
      description:
        "Professional editing, color grading, and visual effects to perfect your content and make it stand out.",
      features: ["Editing", "Color Grading", "VFX", "Sound Design"],
    },
    {
      icon: Users,
      title: "Corporate Videos",
      description:
        "Professional corporate videos for training, internal communications, and company culture storytelling.",
      features: ["Training Videos", "Company Culture", "Internal Communications", "Testimonials"],
    },
    {
      icon: Zap,
      title: "Social Media Content",
      description:
        "Optimized short-form content for social media platforms. Engaging, shareable, and designed for maximum impact.",
      features: ["Short-Form Content", "Platform Optimization", "Trending Formats", "Quick Turnaround"],
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-white/60 font-bold text-sm tracking-widest uppercase">What We Offer</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-4">Our Services</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Comprehensive videography and film production services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-white/5 rounded-xl border border-white/20 hover:border-white/40 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
