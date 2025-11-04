import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Film, Play, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CommercialFilmsPage() {
  const features = [
    "Concept Development & Creative Strategy",
    "Professional Scriptwriting",
    "Expert Crew & Equipment",
    "4K/8K Production Quality",
    "Brand Story Integration",
    "Multi-Platform Optimization",
    "Fast Turnaround Times",
    "Post-Production Excellence",
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your brand, goals, and target audience to create a compelling concept.",
    },
    {
      step: "02",
      title: "Pre-Production",
      description:
        "Scriptwriting, storyboarding, location scouting, and crew assembly.",
    },
    {
      step: "03",
      title: "Production",
      description:
        "Professional filming with state-of-the-art equipment and experienced crew.",
    },
    {
      step: "04",
      title: "Post-Production",
      description:
        "Editing, color grading, sound design, and final delivery in multiple formats.",
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
                <Film className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Commercial Films
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Create powerful brand stories that resonate with your audience.
                Our commercial films combine creative storytelling with
                strategic marketing to deliver measurable results for your
                business.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Get Quote
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:border-white/60 transition-colors flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-white/5 rounded-xl border border-white/20 flex items-center justify-center">
                <Play className="w-16 h-16 text-white/60" />
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
              What's Included
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Comprehensive commercial film production services from concept to
              delivery.
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

      {/* Process Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A proven workflow that ensures your commercial film exceeds
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
