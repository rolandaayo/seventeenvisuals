import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  Code,
  Play,
  CheckCircle,
  ArrowLeft,
  Globe,
  Smartphone,
  Palette,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function WebMobileDevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Responsive, fast-loading websites built with modern technologies and best practices.",
      features: [
        "Responsive design",
        "SEO optimization",
        "Fast performance",
        "CMS integration",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS/Android",
        "Cross-platform",
        "App store deployment",
        "Push notifications",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive and engaging digital experiences.",
      features: [
        "User research",
        "Wireframing",
        "Prototyping",
        "Design systems",
      ],
    },
    {
      icon: Zap,
      title: "Full-Stack Development",
      description:
        "Complete frontend and backend solutions with modern frameworks and databases.",
      features: [
        "Frontend frameworks",
        "Backend APIs",
        "Database design",
        "Cloud deployment",
      ],
    },
  ];

  const technologies = {
    frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
    cloud: ["AWS", "Vercel", "Firebase", "Docker", "CI/CD"],
  };

  const process = [
    {
      title: "Discovery & Planning",
      description:
        "Understanding your requirements, target audience, and technical needs.",
    },
    {
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes.",
    },
    {
      title: "Development",
      description:
        "Building your application with clean, scalable, and maintainable code.",
    },
    {
      title: "Testing & Deployment",
      description:
        "Thorough testing and deployment to production environments.",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and feature enhancements.",
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
                <Code className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Web & Mobile Development
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Full-stack development services for websites and mobile
                applications. From responsive websites to native mobile apps, we
                build digital solutions that drive your business forward.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Get Quote
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:border-white/60 transition-colors flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  View Projects
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-white/5 rounded-xl border border-white/20 flex items-center justify-center">
                <Code className="w-16 h-16 text-white/60" />
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
              Development Services
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions from concept to deployment and
              beyond.
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

      {/* Technologies Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Modern, proven technologies that ensure scalable and maintainable
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
              <div className="space-y-2">
                {technologies.frontend.map((tech, index) => (
                  <div key={index} className="text-white/70 text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
              <div className="space-y-2">
                {technologies.backend.map((tech, index) => (
                  <div key={index} className="text-white/70 text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Mobile</h3>
              <div className="space-y-2">
                {technologies.mobile.map((tech, index) => (
                  <div key={index} className="text-white/70 text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Cloud & DevOps
              </h3>
              <div className="space-y-2">
                {technologies.cloud.map((tech, index) => (
                  <div key={index} className="text-white/70 text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Development Process
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A structured approach that ensures quality, timeline adherence,
              and client satisfaction.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Let's discuss your project requirements and create a digital
            solution that exceeds your expectations.
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
