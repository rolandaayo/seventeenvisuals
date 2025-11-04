import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  Film,
  Camera,
  Clapperboard,
  Sparkles,
  Users,
  Code,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Film,
      title: "Commercial Films",
      description:
        "High-quality commercials and brand films that tell your story and drive engagement.",
      features: [
        "Concept Development",
        "Scriptwriting",
        "Professional Crew",
        "4K/8K Production",
      ],
      href: "/services/commercial-films",
    },
    {
      icon: Camera,
      title: "BTS & Documentary",
      description:
        "Authentic behind-the-scenes content and documentary-style videography that captures real moments.",
      features: [
        "Event Coverage",
        "Documentary Style",
        "Authentic Storytelling",
        "Multi-Camera Setup",
      ],
      href: "/services/bts-documentary",
    },
    {
      icon: Clapperboard,
      title: "Music Videos",
      description:
        "Creative music video production with cinematic visuals and artistic direction.",
      features: [
        "Creative Direction",
        "Choreography",
        "Visual Effects",
        "Color Grading",
      ],
      href: "/services/music-videos",
    },
    {
      icon: Sparkles,
      title: "Post-Production",
      description:
        "Professional editing, color grading, and visual effects to perfect your content.",
      features: ["Editing", "Color Grading", "VFX", "Sound Design"],
      href: "/services/post-production",
    },
    {
      icon: Users,
      title: "Corporate Videos",
      description:
        "Professional corporate videos for training, communications, and company culture.",
      features: [
        "Training Videos",
        "Company Culture",
        "Internal Communications",
        "Testimonials",
      ],
      href: "/services/corporate-videos",
    },
    {
      icon: Code,
      title: "Web & Mobile Development",
      description:
        "Full-stack development services for websites and mobile applications with modern design.",
      features: [
        "Website Development",
        "Mobile App Development",
        "Frontend & Backend",
        "UI/UX Design",
      ],
      href: "/services/web-mobile-development",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-white/60 font-bold text-sm tracking-widest uppercase">
              What We Offer
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-4">
              Our Services
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Comprehensive videography, film production, and digital
              development services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white/5 rounded-xl border border-white/20 hover:border-white/40 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/80"
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all group-hover:scale-105 border border-white/20 hover:border-white/40"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
