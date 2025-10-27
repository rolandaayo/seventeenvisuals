"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

// Sample presets data - replace with real data
const presets = [
  {
    id: 1,
    name: "Cinematic Orange & Teal",
    description:
      "Perfect for moody, cinematic footage with warm highlights and cool shadows.",
    price: "$49.99",
    image: "/placeholder-preset.jpg", // Add a preset preview image
    category: "Cinematic",
  },
  {
    id: 2,
    name: "Urban Night",
    description:
      "Enhance night city shots with balanced exposure and neon highlights.",
    price: "$49.99",
    image: "/placeholder-preset.jpg",
    category: "Urban",
  },
  // Add more presets here
];

export default function PresetsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-white/60 font-bold text-sm tracking-widest uppercase">
              Color Grading
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Professional Presets
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Transform your footage with our carefully crafted color grading
              presets.
            </p>
          </div>

          {/* Presets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presets.map((preset) => (
              <div
                key={preset.id}
                className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all group"
              >
                {/* Preset Preview */}
                <div className="relative aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <Image
                    src={preset.image}
                    alt={preset.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Preset Info */}
                <div className="p-6">
                  <div className="text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                    {preset.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {preset.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {preset.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">{preset.price}</span>
                    <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded hover:bg-white/90 transition-all">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <p className="text-white/60 mb-6">
              Need a custom preset? Contact us to discuss your specific needs.
            </p>
            <button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
