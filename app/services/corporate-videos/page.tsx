import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  Users,
  Play,
  CheckCircle,
  ArrowLeft,
  Building,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function CorporateVideosPage() {
  const videoTypes = [
    {
      icon: Building,
      title: "Company Culture",
      description:
        "Showcase your workplace culture, values, and team dynamics to attract top talent.",
      features: [
        "Employee interviews",
        "Office tours",
        "Team activities",
        "Brand storytelling",
      ],
    },
    {
      icon: GraduationCap,
      title: "Training Videos",
      description:
        "Effective training content that educates and engages your employees.",
      features: [
        "Onboarding videos",
        "Skill development",
        "Safety training",
        "Process documentation",
      ],
    },
    {
      icon: MessageSquare,
      title: "Internal Communications",
      description:
        "Clear, engaging videos for company announcements and updates.",
      features: [
        "CEO messages",
        "Policy updates",
        "Event announcements",
        "Change management",
      ],
    },
    {
      icon: Users,
      title: "Testimonials",
      description:
        "Authentic customer and employee testimonials that build trust and credibility.",
      features: [
        "Customer stories",
        "Employee testimonials",
        "Case studies",
        "Success stories",
      ],
    },
  ];

  const benefits = [
    "Improved employee engagement",
    "Consistent messaging across teams",
    "Reduced training costs",
    "Better knowledge retention",
    "Enhanced company culture",
    "Streamlined onboarding process",
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
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Corporate Videos
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Professional corporate video production for training, internal
                communications, and company culture storytelling. Engage your
                team and communicate effectively with high-quality video
                content.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Get Quote
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:border-white/60 transition-colors flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  View Examples
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-white/5 rounded-xl border border-white/20 flex items-center justify-center">
                <Building className="w-16 h-16 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Types Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Corporate Video Solutions
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Comprehensive video production services tailored for corporate
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-black/50 rounded-xl border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {type.title}
                  </h3>
                  <p className="text-white/70 mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {type.features.map((feature, i) => (
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

      {/* Benefits Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Corporate Videos Work
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Video content is proven to be more engaging and memorable than
                text-based communications. Our corporate videos help you connect
                with your team and communicate more effectively.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">87%</h3>
                <p className="text-white/70">
                  Higher engagement with video content vs text
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">65%</h3>
                <p className="text-white/70">
                  Better information retention with video
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">50%</h3>
                <p className="text-white/70">
                  Reduction in training time with video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We work closely with your team to understand your goals and create
              content that resonates.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Discovery</h3>
              <p className="text-white/70 text-sm">
                Understanding your objectives and target audience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Planning</h3>
              <p className="text-white/70 text-sm">
                Script development and production planning
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Production</h3>
              <p className="text-white/70 text-sm">
                Professional filming with minimal disruption
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Delivery</h3>
              <p className="text-white/70 text-sm">
                Edited content optimized for your platforms
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
