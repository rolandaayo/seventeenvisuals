"use client"

import { Film, Camera, Clapperboard, Sparkles } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Film,
      title: "Commercial Films",
      description: "High-quality commercials and brand films that tell your story and drive engagement.",
    },
    {
      icon: Camera,
      title: "BTS & Documentary",
      description: "Authentic behind-the-scenes content and documentary-style videography.",
    },
    {
      icon: Clapperboard,
      title: "Music Videos",
      description: "Creative music video production with cinematic visuals and artistic direction.",
    },
    {
      icon: Sparkles,
      title: "Post-Production",
      description: "Professional editing, color grading, and visual effects to perfect your content.",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-white/50 font-bold text-sm uppercase tracking-widest mb-4">What We Offer</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Our Services</h2>
          <div className="w-12 h-1 bg-white" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group space-y-4 p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="w-12 h-12 border-2 border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                  <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
