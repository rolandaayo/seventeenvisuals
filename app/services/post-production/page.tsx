import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  Sparkles,
  Play,
  CheckCircle,
  ArrowLeft,
  Scissors,
  Palette,
  Volume2,
} from "lucide-react";
import Link from "next/link";

export default function PostProductionPage() {
  const services = [
    {
      icon: Scissors,
      title: "Video Editing",
      description:
        "Professional editing with smooth transitions, pacing, and storytelling flow.",
      features: [
        "Multi-cam editing",
        "Motion graphics",
        "Transitions",
        "Audio sync",
      ],
    },
    {
      icon: Palette,
      title: "Color Grading",
      description:
        "Cinematic color correction and grading to enhance mood and visual appeal.",
      features: [
        "Color correction",
        "LUT application",
        "Mood enhancement",
        "Consistency",
      ],
    },
    {
      icon: Sparkles,
      title: "Visual Effects",
      description:
        "Advanced VFX, compositing, and motion graphics for stunning visuals.",
      features: ["Compositing", "Green screen", "3D graphics", "Animation"],
    },
    {
      icon: Volume2,
      title: "Sound Design",
      description:
        "Audio mixing, sound effects, and music integration for immersive experience.",
      features: [
        "Audio mixing",
        "Sound effects",
        "Music sync",
        "Voice enhancement",
      ],
    },
  ];

  const workflow = [
    "Raw footage review and organization",
    "Rough cut assembly and pacing",
    "Fine editing and transitions",
    "Color correction and grading",
    "Visual effects and graphics",
    "Audio mixing and sound design",
    "Client review and revisions",
    "Final delivery in multiple formats",
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Post-Production
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Transform raw footage into polished, professional content. Our
                post-production services include editing, color grading, VFX,
                and sound design to make your content stand out.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Get Quote
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:border-white/60 transition-colors flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Before & After
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-white/5 rounded-xl border border-white/20 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Post-Production Suite
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From basic editing to advanced VFX, we handle every aspect of
              post-production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-black/50 rounded-xl border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Workflow</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A systematic approach ensuring quality and efficiency at every
              step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <p className="text-white/80 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specs */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Formats Supported
              </h3>
              <div className="space-y-2 text-white/70">
                <p>4K/8K Resolution</p>
                <p>HDR & Dolby Vision</p>
                <p>All Camera Formats</p>
                <p>RAW & Log Footage</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Software</h3>
              <div className="space-y-2 text-white/70">
                <p>DaVinci Resolve</p>
                <p>Adobe Creative Suite</p>
                <p>After Effects</p>
                <p>Pro Tools</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Delivery</h3>
              <div className="space-y-2 text-white/70">
                <p>Multiple Formats</p>
                <p>Platform Optimization</p>
                <p>Cloud Delivery</p>
                <p>Archive Storage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
