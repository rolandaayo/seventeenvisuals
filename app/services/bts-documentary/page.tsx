import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Camera, Play, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BTSDocumentaryPage() {
  const features = [
    "Event Coverage & Documentation",
    "Multi-Camera Setup",
    "Authentic Storytelling",
    "Real-time Capture",
    "Minimal Disruption Approach",
    "Interview & Testimonial Setup",
    "Raw & Edited Deliverables",
    "Same-day Highlights Available",
  ];

  const applications = [
    {
      title: "Corporate Events",
      description:
        "Conferences, product launches, team building events, and company milestones.",
    },
    {
      title: "Film Productions",
      description:
        "Behind-the-scenes content for movies, commercials, and music videos.",
    },
    {
      title: "Documentaries",
      description:
        "Real-life stories, social issues, and human interest documentaries.",
    },
    {
      title: "Live Events",
      description:
        "Concerts, festivals, sports events, and cultural celebrations.",
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
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                BTS & Documentary
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Capture authentic moments and real stories with our
                documentary-style videography. Perfect for events,
                behind-the-scenes content, and compelling human interest
                stories.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Get Quote
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:border-white/60 transition-colors flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  View Work
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-white/5 rounded-xl border border-white/20 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Unobtrusive documentation that captures genuine moments and
              authentic stories.
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

      {/* Applications Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Perfect For</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Versatile documentary coverage for various events and storytelling
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 rounded-xl border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {app.title}
                </h3>
                <p className="text-white/70">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
