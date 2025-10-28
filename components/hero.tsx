"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onError={(e) => console.error("Video playback error:", e)}
        >
          <source src="/Intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in-up">
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
            SEVENTEEN
            <br />
            VISUALS
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Cinematic storytelling for brands that demand excellence. Film. BTS.
            Videography.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
            <Link
              href="/portfolio"
              className="px-5 py-2 bg-white text-black font-bold hover:bg-white/90 transition-all duration-300 text-sm sm:text-base animate-bounce"
            >
              View Work
            </Link>
            <Link
              href="/book"
              className="px-5 py-2 border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
            >
              Book Now!
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
