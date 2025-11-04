import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  Clapperboard,
  Play,
  CheckCircle,
  ArrowLeft,
  Music,
} from "lucide-react";
import Link from "next/link";

export default function MusicVideosPage() {
  const features = [
    "Creative Direction & Concept Development",
    "Choreography Coordination",
    "Visual Effects & Motion Graphics",
    "Professional Color Grading",
    "Multi-Location Shoots",
    "Artist Performance Direction",
    "Cinematic Lighting Setup",
    "High-End Post-Production",
  ];

  const styles = [
    {
      title: "Narrative",
      description:
        "Story-driven videos that complement your music with compelling visual narratives.",
    },
    {
      title: "Performance",
      description:
        "High-energy performance videos showcasing your artistry and stage presence.",
    },
    {
      title: "Conceptual",
      description:
        "Abstract and artistic interpretations that create unique visual experiences.",
    },
    {
      title: "Lyric Videos",
      description:
        "Engaging typography and motion graphics synchronized with your lyrics.",
    },
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
                <Clapperboard className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Music Videos
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Bring your music to life with cinematic visuals and creative
                storytelling. We create music videos that amplify your artistic
                vision and connect with your audience.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Get Quote
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:border-white/60 transition-colors flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Watch Reel
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-white/5 rounded-xl border border-white/20 flex items-center justify-center">
                <Music className="w-16 h-16 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Production Excellence
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From concept to final cut, we deliver music videos that stand out
              in today's competitive landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Styles Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Video Styles</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Choose from various styles or let us create a custom approach for
              your unique vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {styles.map((style, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {style.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Let's discuss your music video concept and bring your artistic
            vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Start Your Project
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:border-white/60 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
